import {Button, Modal, Spinner} from "react-bootstrap";
import {SignUpForm} from "./SignUpForm";
import {useState} from "react";

export function SignUp() {
        const {data, error, isLoading} = useGetSignUpQuery("")
        if(isLoading || data === undefined) {
            if(error){error.message}
        return( <Spinner animation="border" />)
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
                    <SignUpForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="secondary" onClick={handleClose}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}