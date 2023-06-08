
import {Button, Form, Container, Row, Col, Image, Modal} from "react-bootstrap";
import {Navigation} from "./shared_components/NavBar.tsx";

export function CreateQuote() {
    return (
        <>
            <Navigation/>
            <Container>
                <Form>
                    <Row className="justify-content-center pt-3">
                        <Col xs="auto">
                            <h1>Create an AI Quote Image</h1>
                            <p>Select your topic and voice to let the AI work its magic! Once the quote is generated choose from 6 draft images, each showcasing the same quote with different layouts. Click to save your favorite to your profile. Let the AI amuse and astound you with its whimsical creations!</p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">

                        <Col xs="auto" className="py-2">
                            <Form.Select defaultValue="- Choose a TOPIC - ">
                                <option>Choose a TOPIC</option>
                                <option>Being married</option>
                                <option>Coworkers at the office</option>
                                <option>Work and productivity</option>
                                <option>Health and Fitness</option>
                                <option>Relationships and dating</option>
                                <option>Education and learning</option>
                                <option>Technology and social media</option>
                                <option>Travel and adventure</option>
                                <option>Money and finance</option>
                                <option>Self-improvement & personal growth</option>
                                <option>Politics and current events</option>
                                <option>Pop culture and entertainment</option>
                                <option>Hobbies and Interests</option>
                                <option>Food and Diet</option>
                                <option>Parenting and Family</option>
                                <option>School and Education</option>
                                <option>Love and Relationships</option>
                                <option>Sports and Fitness</option>
                                <option>Government</option>
                                <option>Men</option>
                                <option>Women</option>
                                <option>The pandemic</option>
                                <option>Family Christmas vacation</option>
                                <option>Thanksgiving holidays</option>
                                <option>Valentine's Day</option>
                                <option>Halloween</option>
                                <option>Mother's Day</option>
                                <option>Father's Day</option>
                                <option>Christmas</option>
                                <option>New Year's Eve</option>
                                <option>Graduation</option>
                                <option>Wedding</option>
                                <option>Baby Shower</option>
                                <option>Retirement party</option>
                            </Form.Select>
                        </Col>


                        <Col xs="auto" className="py-2">
                            <Form.Select defaultValue="Choose a VOICE">
                                <option>Choose a VOICE</option>
                                <option>Normal Voice</option>
                                <option>Valley girl</option>
                                <option>California surfer</option>
                                <option>Morgan Freeman</option>
                                <option>Samuel L. Jackson</option>
                                <option>The Rock</option>
                                <option>Gordon Ramsay</option>
                                <option>Sean Connery</option>
                                <option>Christopher Walken</option>
                                <option>Yoda</option>
                                <option>The Joker</option>
                                <option>SpongeBob</option>
                                <option>Kermit the Frog</option>
                                <option>Gollum</option>
                                <option>Darth Vader</option>
                                <option>Forrest Gump</option>
                                <option>Borat</option>
                                <option>Arnold Schwarzenegger</option>

                            </Form.Select>
                        </Col>

                    </Row>

<Row className="mb-3 justify-content-center">
<Col xs="auto" className="py-2">
                <Button variant="primary" size="lg" type="submit">Generate a Quote</Button>
</Col>
    <Col xs="auto" className="py-2">
                <Button variant="secondary" size="lg" type="submit">Randomize</Button>
</Col>

</Row>
                </Form>
                <Row className="justify-content-center">
                    <Col lg={4}  xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/1" alt="Gloomsmith Generated Quote Image" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="secondary" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>

                    <Col lg={4}  xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/2" alt="Gloomsmith Generated Quote Image" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="secondary" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>

                    <Col lg={4}  xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/3" alt="Gloomsmith Generated Quote Image" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="secondary" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>

                    <Col lg={4}  xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/4" alt="Gloomsmith Generated Quote Image" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="secondary" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>


                    <Col lg={4}  xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/5" alt="Gloomsmith Generated Quote Image" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="secondary" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>

                    <Col lg={4}  xs={6} className="py-4">
                        <Image fluid src="https://placebeard.it/1080/1400/6" alt="Gloomsmith Generated Quote Image" />
                        <Col xs="auto" className="d-flex justify-content-center py-2">
                            <Button variant="secondary" size="lg" type="submit">Save</Button>
                        </Col>
                    </Col>


                </Row>

                </Container>




        </>
    )
}

