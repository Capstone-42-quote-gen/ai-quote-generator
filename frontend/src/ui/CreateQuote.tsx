
import {Button, Form, Container, Row, Col, Image} from "react-bootstrap";
import createimg from "../assets/create-placeholder.jpg";
<<<<<<< HEAD
import {Navigation} from "./shared_components/NavBar.tsx";
=======
>>>>>>> navbar

export function CreateQuote() {
    return (
        <>
<<<<<<< HEAD
            <Navigation/>
=======

>>>>>>> navbar
            <Container>
                <Form>
                    <Row className="mb-3 justify-content-center">
                        <Col xs="auto">
                            <h1>Generate a Quote</h1>
                            <p>To generate your own custom GloomSmith quote image select a topic and optional voice and then generate.</p>
                        </Col>
                    </Row>

                    <Row className="mb-3 justify-content-center">

                        <Col xs="auto">
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


                        <Col xs="auto">
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
<Col xs="auto">
                <Button variant="primary" size="lg" type="submit">Generate a Quote</Button>
</Col>
    <Col xs="auto">
                <Button variant="secondary" size="lg" type="submit">Randomize</Button>
</Col>
<<<<<<< HEAD
    <Col xs="auto">
        <Button variant="secondary" size="lg" type="submit">Save Quote</Button>
    </Col>
=======
>>>>>>> navbar
</Row>
                </Form>
                <Row className="justify-content-center">
                    <Col lg={4} className="py-4">
                        <Image fluid src={createimg} alt="Temp Image" />
                    </Col>

                </Row>
                </Container>




        </>
    )
}