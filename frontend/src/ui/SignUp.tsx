import { Button, Form, Modal } from "react-bootstrap";
import {useState} from "react";

export function SignUp() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant={"secondary"} size={"lg"} onClick={handleShow}>Click here</Button>

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
                        placeholder="name@example.com"
                        autoFocus
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
            </Modal>
        </>
    )
}

