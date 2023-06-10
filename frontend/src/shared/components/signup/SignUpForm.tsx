import {Button, Form} from "react-bootstrap";
import * as Yup from "yup";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {DisplayError} from "../display-error/DisplayError";
import {DisplayStatus} from "../display-status/DisplayStatus";
import {FormDebugger} from "../FormDebugger";
import {ClientResponseForSignIn, MutationResponse, usePostSignUpMutation} from "../../../store/apis";
import {SignUp} from "../../interfaces/SignUp";


export function SignUpForm({ onSubmit }: { onSubmit: (values: SignUp) => void }) {

    const signUp: SignUp = {
        profileUsername: "",
        profilePhotoUrl: null,
        profileEmail: "",
        profilePassword: ""
    };

    const [submit] = usePostSignUpMutation()

    const validator = Yup.object().shape({
        profileUsername: Yup.string()
            .required("Username is required for sign up")
            .min(1, "SignUp username must be at least 1 character")
            .max(32, "SignUp username must be at least 32 characters"),
        profileEmail: Yup.string()
            .required("An email is required to sign up")
            .max(256, "Email cannot be over 64 characters"),
        profilePassword: Yup.string()
            .required("Password is required to create a sign up")
            .min(8, "password must be at least 8 characters")
    })

    const submitSignUp = async (values: SignUp, actions: FormikHelpers<SignUp>) => {
        const {resetForm, setStatus} = actions
        console.log(values)
        const result = await submit(values) as MutationResponse
        const {data: response, error} = result as {
            data: ClientResponseForSignIn,
            error: ClientResponseForSignIn
        }

        if (error) {
            setStatus({type: error.type, message: error.message})
        } else if (response?.status === 200) {
            resetForm()
            setStatus({type: response.type, message: response.message})
        } else {
            setStatus({type: response?.type, message: response?.message})
        }
    }

    return (
            <Formik initialValues={signUp} onSubmit={submitSignUp} validationSchema={validator}>
                {SignUpFormContent}
            </Formik>
    )

    function SignUpFormContent(props: FormikProps<SignUp>) {
        const {
            status,
            values,
            errors,
            touched,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
        } = props;

        return (
            <>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Form.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={"Email"}
                            value={values.profileEmail}
                            name="profileEmail"
                            // autoFocus
                        />
                        <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={"Username"}
                            value={values.profileUsername}
                            name="profileUsername"
                        />
                        <DisplayError errors={errors} touched={touched} field={"profileUsername"}/>
                        <Form.Label htmlFor="profilePassword">Password</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={"Password"}
                            value={values.profilePassword}
                            name="profilePassword"
                            // aria-describedby="passwordHelpBlock"
                        />
                        <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="secondary" type={"submit"}>Submit</Button>
                        {""}
                        <Button variant="secondary" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</Button>
                    </Form.Group>
                </Form>
                <DisplayStatus status={status}/>
                <FormDebugger {...props}/>
            </>
        )
    }
}