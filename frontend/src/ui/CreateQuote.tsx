
import React from "react";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
export function CreateQuote() {
    return (
        <>

            <Container>
                <h1>Create A Quote</h1>
                <Form>
                    <Row className="mb-3">
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


                <Button variant="primary" size="lg" type="submit">Generate a Quote</Button>{' '}  <Button variant="secondary" size="lg" type="submit">Randomize</Button>{' '}
                </Form>
                </Container>




        </>
    )
}