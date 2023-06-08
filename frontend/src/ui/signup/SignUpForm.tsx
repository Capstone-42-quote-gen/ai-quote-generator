import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import * as Yup from "yup";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {MutationResponse, usePostProfileMutation} from "../../store/apis";
import {PartialSignUp} from "../../shared/interfaces/SignUp";


export function SignUpForm() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // const dispatch = useDispatch()
    const [submit] = usePostProfileMutation()

    const validator = Yup.object().shape({
        profileUsername: Yup.string()
            .required("Username is required for sign up")
            .min(1, "SignUp username must be at least 1 character")
            .max(32, "SignUp username must be at max"),
        profileEmail: Yup.string()
            .required("An email is required to sign up")
            .max(256, "Email cannot be over 64 characters"),
        profilePassword: Yup.string()
            .required("Password is required to create a sign up")
            .min(8, "password must be at least 8 characters")
    })

    const initialValues: PartialSignUp = {
        profileUsername: "",
        profileEmail: "",
        profilePassword: ""
    }

    async function handleSubmit(values: PartialSignUp, actions: FormikHelpers<PartialSignUp>) {
        const {resetForm, setStatus} = actions
        console.log(values)
        const result = await submit(values) as MutationResponse
        const {data: response, error} = result

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
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validator}>
                {SignUpFormContent}
            </Formik>
        </>
    )

    function SignUpFormContent(props: FormikProps<PartialSignUp>) {
        const {
            status,
            values,
            errors,
            touched,
            // dirty,
            // isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            // handleReset
        } = props;

        return (
            <>
                <Button variant={"secondary"} size={"lg"} onClick={handleShow}>Register here</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="Form.ControlInput1">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder={"Email"}
                                    values={values.profileEmail}
                                    name="profileEmail"
                                    // autoFocus
                                />
                                <DisplayError error={errors} touched={touched} field={"profileEmail"} />
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder={"Username"}
                                    values={values.profileUsername}
                                    name="profileUsername"
                                />
                                <DisplayError error={errors} touched={touched} field={"profileUsername"} />
                                <Form.Label htmlFor="profilePassword">Password</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder={"Password"}
                                    values={values.profilePassword}
                                    name="profilePassword"
                                    // aria-describedby="passwordHelpBlock"
                                />
                                <DisplayError error={errors} touched={touched} field={"profilePassword"} />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long
                                </Form.Text>
                            </Form.Group>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="secondary" onClick={handleClose}>Submit</Button>
                    </Modal.Footer>
                </Modal>
                <DisplayStatus status={status} />
            </>
        )
    }
}

