
import {Card, Col, Container, Row} from "react-bootstrap";
// import signInIcon from "../../../assets/icon-1.png";
import signInIcon from "../../../assets/gloomSmithLogo-blue.png";
import {SignInForm} from "./SignInForm"
import {SignUp} from "../signup/SignUp"


export function SignIn() {


    return (
        <>


            <Container
                className={"align-items-center sign-in-card-resize mx-auto m-3"}>

                    <Col className="text-center pb-3">
                        <a
                            href="/"><img
                            src={signInIcon}
                            alt={"logo"} className={"img-fluid"} />
                        </a>

                    </Col>

                <Card
                    className={"sign-in-card"}>
                    <Card.Body
                        className={"rounded"}>

                        <h1 className={"pt-3 sign-in-h1"}>Sign In</h1>
                            <Row className={"justify-content-center"}>
                                <Col md={12}>
                                <SignInForm />
                                </Col>
                            </Row>
                        </Card.Body>

                </Card>
                <Row className={"justify-content-center mt-4"}>
                    <Col lg={8}>
                        <div className={"text-center"}>
                            <span className={"signup-text"}>
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
            </Container>
    </>
    )
}