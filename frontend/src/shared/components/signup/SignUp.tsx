import {Button, Modal} from "react-bootstrap";
import {SignUpForm} from "./SignUpForm";
import {useState} from "react";

export function SignUp() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleSubmit = (vales: SignUp) =>

    return (
        <>
            <Button variant={"secondary"} size={"lg"} onClick={handleShow}>Register here</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpForm onSubmit={handleSubmit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}