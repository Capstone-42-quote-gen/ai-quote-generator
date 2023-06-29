import {Button, Form} from "react-bootstrap";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {DisplayError} from "../display-error/DisplayError";
import {ClientResponseForSignIn, MutationResponse, usePostSignUpMutation} from "../../../store/apis";
import {SignUp} from "../../interfaces/Profile";
import {object, string} from "yup";
import {useNavigate} from "react-router-dom";
import {DisplayStatus} from "../display-status/DisplayStatus";



export const SignUpForm = () => {

    const navigate = useNavigate()

    const signUp: SignUp = {
        profileUsername: "",
        profileEmail: "",
        profilePassword: ""
    }

    const [submit] = usePostSignUpMutation()

    const validator = object().shape({
        profileEmail: string()
            .required("An email is required to sign up")
            .max(256, "Email cannot be over 64 characters"),
        profileUsername: string()
            .required("Username is required for sign up")
            .min(1, "SignUp username must be at least 1 character")
            .max(32, "SignUp username must be at least 32 characters"),
        profilePassword: string()
            .required("Password is required to create a sign up")
            .min(8, "password must be at least 8 characters")
    })

    const submitSignUp = async (values: SignUp, actions: FormikHelpers<SignUp>) => {
        const {resetForm, setStatus} = actions
        // console.log(values)
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
            navigate( "/sign-in")
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
        } = props;

        return (
            <>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Form.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={""}
                            value={values.profileEmail}
                            name="profileEmail"
                            type="email"
                            // autoFocus
                        />
                        <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={""}
                            value={values.profileUsername}
                            name="profileUsername"
                            type="username"
                        />
                        <DisplayError errors={errors} touched={touched} field={"profileUsername"}/>
                        <Form.Label htmlFor="profilePassword">Password</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={""}
                            value={values.profilePassword}
                            name="profilePassword"
                            type="password"
                            // aria-describedby="passwordHelpBlock"
                        />
                        <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Button className={"mb-3"} variant="secondary" type={"submit"} disabled={!dirty || isSubmitting}>Submit</Button>
                    </Form.Group>
                </Form>
                <DisplayStatus status={status}/>
                {/*<FormDebugger {...props}/>*/}
            </>
        )
    }
}