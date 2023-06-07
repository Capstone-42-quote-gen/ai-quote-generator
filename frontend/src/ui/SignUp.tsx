import { Button, Form, Modal } from "react-bootstrap";
import {useState} from "react";
import * as Yup from "yup";

export function SignUpForm() {

        const dispatch = useDipatch()

        const validator = Yup.object().shape({
            profileUsername: Yup.string()
                .required("Username is required for sign up")
                .min(1, "Profile username must be at least 1 character")
                .max(32, "Profile username must be at max")
            signUpEmail: Yup.string()
                .required("A sign in email is required to create a sign in")
                .max(128, "sign in email cannot be over 64 characters"),
            signUpPassword: Yup.string()
                .required("sign in password is required to create a sign in")
                .min(8, "password must be at least 8 characters")
        })

        const handleSubmit = (values, {resetForm, setStatus}) => {
            redux
        }

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant={"secondary"} size={"lg"} onClick={handleShow}>Register here</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="Form.ControlInput1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                        autoFocus
                        />
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        id="username"
                    />
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        />
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
        </>
    )
}

