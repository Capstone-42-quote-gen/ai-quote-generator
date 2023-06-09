
import {Card, Col, Container, Row} from "react-bootstrap";
import signInIcon from "../../assets/icon-1.png";
import {SignInForm} from "./SignInForm";
import {SignUp} from "../signup/SignUp";


export function SignIn() {


    return (
        <>
            <Container className={"align-items-center py-5"}>
                <Card className={"sign-in-card"}>
                    <Card.Body>
                        <Card.Title className={"text-center py-4"}>
                            <a href="/"><img src={signInIcon} alt={"logo"} /></a>
                            <h1 className={"pt-3"}>Sign In</h1>
                        </Card.Title>
                        <hr className={"center-hr"}/>
                <Row className={"justify-content-center"}>
                    <Col md={6}>
                        <SignInForm />
                    </Col>
                </Row>
                <Row className={"justify-content-center mt-4"}>
                    <Col lg={8}>
                        <div className={"text-center"}>
                            <span className={"divider-text"}>
                                <hr/>Not signed up yet?<hr/>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className={"justify-content-center"}>
                    <Col lg={8}>
                        <div className={"d-grid"}>
                            <SignUp />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
    </>
    )
}