import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {SignUp} from "../SignUp";
import signInIcon from "../../assets/icon-1.png";
// import * as Yup from "yup";


export function SignInForm() {

    // const validator = Yup.object().shape({
    //     signInEmail: Yup.string()
    //         .required("A sign in email is required to create a sign in")
    //         .max(128, "sign in email cannot be over 64 characters"),
    //     signInPassword: Yup.string()
    //         .required("sign in password is required to create a sign in")
    //         .min(8, "password must be at least 8 characters")
    // })
    //
    // const handleSubmit = (values, {resetForm, setStatus}) => {
    //     redux
    // }


    return (
        <>
            <Container className={"align-items-center py-5"}>
                <Row className={"justify-content-center"}>
                    <Col md={6}>
                        <Card className={"sign-in-card"}>
                            <Card.Body>
                                <Card.Title className={"text-center py-4"}>
                                            <a href="/"><img src={signInIcon} alt={"logo"} /></a>
                                    <h1 className={"pt-3"}>Sign In</h1>
                                </Card.Title>
                                <hr className={"center-hr"}/>   
                                <Form>
                                    <Form.Group className={"mb-3"} controlId="formHorizontalEmail">
                                        <Form.Label column lg={2} className="ms-2">
                                            Email
                                        </Form.Label>
                                        <Col lg={12}>
                                            <Form.Control type="email"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                        <Form.Label column lg={4} className="ms-2">
                                            Password
                                        </Form.Label>
                                        <Col lg={12}>
                                            <Form.Control type="password"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col lg={"12"}>
                                            <Button variant={"secondary"} type={"submit"}>Sign in</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={"justify-content-center mt-4"}>
                    <Col lg={8}>
                        <div className={"text-center"}>
                            <span className={"divider-text"}><hr/>Not signed up yet?<hr/></span>
                        </div>
                    </Col>
                </Row>
                <Row className={"justify-content-center"}>
                    <Col lg={8}>
                    <div className={"d-grid"}>
                        <SignUp/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}