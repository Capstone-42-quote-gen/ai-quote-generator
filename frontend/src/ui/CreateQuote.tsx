import {Button, Form, Container, Row, Col, Image, Spinner} from "react-bootstrap";
import { useState } from 'react';
import {Navigation} from "../shared/components/NavBar.tsx";
import {useGetAllPromptsQuery} from "../store/apis.ts";
import {Prompt} from "../shared/interfaces/Prompt.ts";


export function CreateQuote() {

    const {data: prompts, error, isLoading} = useGetAllPromptsQuery("")
    if (isLoading || prompts === undefined) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    let voices: Prompt[] = prompts.filter(prompt => prompt.promptType === "voice")
    console.log(voices)

    let topics: Prompt[] = prompts.filter(prompt => prompt.promptType === "topic")
    console.log(topics)


    return (
        <>
            <Navigation/>
            <Container>
                <Form>
                    <Row className="justify-content-center pt-3">
                        <Col xs="auto">
                            <h1>Create an AI Quote Image</h1>
                            <p>Select your topic and voice to let the AI work its magic! Once the quote is generated
                                choose from 6 draft images, each showcasing the same quote with different layouts. Click
                                to save your favorite to your profile. Let the AI amuse and astound you with its
                                whimsical creations!</p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">

                        <Col xs="auto" className="py-2">
                            <Form.Select defaultValue="Choose a TOPIC">
                                <option value="">Choose a TOPIC</option>
                                {topics.map(topic => <option value={topic.promptId}>{topic.promptValue}</option>)}
                            </Form.Select>
                        </Col>


                        <Col xs="auto" className="py-2">
                            <Form.Select defaultValue="Choose a VOICE">
                                <option value="">Choose a VOICE</option>
                                {voices.map(voice => <option value={voice.promptId}>{voice.promptValue}</option>)}

                            </Form.Select>
                        </Col>

                    </Row>

                    <Row className="mb-3 justify-content-center">
                        <Col xs="auto" className="py-2">
                            <Button variant="primary" size="lg" type="submit">Generate a Quote</Button>
                        </Col>
                        {/*<Col xs="auto" className="py-2">*/}
                        {/*    <Button variant="secondary" size="lg" type="submit">Randomize</Button>*/}
                        {/*</Col>*/}

                    </Row>
                </Form>
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

