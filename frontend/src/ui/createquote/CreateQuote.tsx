import {Button, Container, Row, Col, Image} from "react-bootstrap";
import {Navigation} from "../../shared/components/NavBar.tsx";
import {CreateQuoteFormLogic} from "./CreateQuoteForm.tsx";


export function CreateQuote() {


    return (
        <>
            <Navigation/>
            <Container>
                <CreateQuoteFormLogic/>


                <Row className="justify-content-center">
                    <Col lg={4} xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/1" alt="Gloomsmith Generated Quote Image" className="border border-dark" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="light" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>

                    <Col lg={4} xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/2" alt="Gloomsmith Generated Quote Image" className="border border-dark"/>
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="light" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>

                    <Col lg={4} xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/3" alt="Gloomsmith Generated Quote Image" className="border border-dark"/>
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="light" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>

                    <Col lg={4} xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/4" alt="Gloomsmith Generated Quote Image" className="border border-dark"/>
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="light" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>


                    <Col lg={4} xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/5" alt="Gloomsmith Generated Quote Image" className="border border-dark"/>
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="light" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>

                    <Col lg={4} xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/6" alt="Gloomsmith Generated Quote Image" className="border border-dark" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="light" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>


                </Row>

            </Container>


        </>
    )
}

