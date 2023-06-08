import {Button, Card, Col, Form, Row} from "react-bootstrap";
import signInIcon from "../../assets/icon-1.png";

interface Props {

}

export function SignInCard(props: Props) {
    const {} = props
    return(
        <>
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
        </>
    )
}