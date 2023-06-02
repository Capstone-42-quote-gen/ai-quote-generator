import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

export function SignIn() {
    return (
        <>
            <Container className={"justify-content-center align-items-center"}>
                <Row >
                <Col md={6}>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center py-4">
                        <h1>Sign In</h1>
                    </Card.Title>
            <Form>
                <Form.Group className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column lg={2} className="ms-2">
                        Email
                    </Form.Label>
                    <Col lg={12}>
                        <Form.Control type="email" placeholder="Email"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column lg={4} className="ms-2">
                        Password
                    </Form.Label>
                    <Col lg={12}>
                        <Form.Control type="password" placeholder="Password"/>
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
            </Container>
        </>
    )
}