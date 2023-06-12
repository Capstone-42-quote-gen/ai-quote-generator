import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {Formik, FormikHelpers, FormikProps} from "formik";
import jwtDecode from "jwt-decode";
import {AppDispatch, useAppDispatch} from "../../../store/store";
import {ClientResponseForSignIn, usePostSignInMutation} from "../../../store/apis";
import {DisplayStatus} from "../display-status/DisplayStatus";
import {FormDebugger} from "../FormDebugger";
import {object, string} from "yup";
import {getAuth, JwtToken} from "../../../store/auth";
import {SignIn} from "../../interfaces/Profile";
import {DisplayError} from "../display-error/DisplayError.tsx";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
    const navigate = useNavigate()
    const [ submitRequest ] = usePostSignInMutation()
    const dispatch: AppDispatch = useAppDispatch()

    const validator = object().shape({
    profileEmail: string()
        .email("Please provide a valid email")
        .required("Email is required"),
    profilePassword: string()
        .required("A password is required to sign up")
        .min(8, "Password  cannot be under 8 characters"),
})

    const signIn: SignIn = {
    profileEmail: "",
    profilePassword: ""
}

    const submitSignIn = async (values: SignIn, formikHelpers: FormikHelpers<SignIn>) => {
    const {resetForm, setStatus} = formikHelpers
    const result = await submitRequest(values)
    const {
        data: response, error
    } = result as { data: ClientResponseForSignIn, error: ClientResponseForSignIn }
    if (error) {
        setStatus({type: error.type, message: error.message})
    }
    else if(response?.status === 200) {
        window.localStorage.removeItem("authorization");
        window.localStorage.setItem("authorization", response.authorization as string);
        const decodedToken = jwtDecode<JwtToken>(response.authorization as string)
        dispatch(getAuth(decodedToken))
        resetForm()
        setStatus({type: response.type, message: response.message})
        navigate("/")
    } else {
    setStatus({type: response?.type, message: response?.message})}
    console.log(formikHelpers)
}

return (
    <>
        <Formik
            initialValues={signIn}
            onSubmit={submitSignIn}
            validationSchema={validator}>
        {SignInFormContent}
        </Formik>
    </>
)

    function SignInFormContent(props: FormikProps<SignIn>) {
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
         <Form
             onSubmit={handleSubmit}>
            <Form.Group
                className={"mb-3"}
                controlId="formHorizontalEmail">
              <Form.Label column lg={2}
                          className="ms-2">
              <p>Email</p>
                </Form.Label>
                    <Col lg={12}>
                        <InputGroup>
                            <Form.Control
                             name={"profileEmail"}
                             type="email"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             placeholder={"Email"}
                             value={values.profileEmail}
                             />
                        </InputGroup>
                        <DisplayError errors={errors}
                                      touched={touched}
                                      field={"profileEmail"} />
                    </Col>
            </Form.Group>

            <Form.Group as={Row}
                        className="mb-3">
                        <Form.Label column lg={4}
                                    className="ms-2">
                                Password
                        </Form.Label>
                            <Col lg={12}>
                              <InputGroup>
                                <Form.Control
                                name={"profilePassword"}
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={"Password"}
                                value={values.profilePassword}


                                />
                              </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col lg={"12"}>
                                <InputGroup>
                                    <Button
                                    variant = "secondary"
                                    type="submit">
                                    Sign In
                                    </Button>
                                </InputGroup>
                                <br/>
                              <InputGroup>
                                <Button
                                    variant={"secondary"}
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}>
                                    Reset
                                </Button>
                              </InputGroup>
                            </Col>
            </Form.Group>
         </Form>
       <DisplayStatus status={status}/>
     <FormDebugger {...props}/>
       </>
        )
    }
}