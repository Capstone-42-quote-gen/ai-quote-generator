import { Navigation } from "../shared/components/navbar-functions/NavBar.tsx";
import { Card, Col, Container, Row } from "react-bootstrap";
import {Footer} from "../shared/components/navbar-functions/Footer.tsx";

export const AboutUs = () => {
    return (
        <>
            <Navigation />
            <Container className="pt-5">
                <Row>
                    <h1>About Gloomsmith</h1>
                    <p>
                        Gloomsmith is an innovative platform that harnesses the power of
                        artificial intelligence to dynamically generate hilarious
                        "de-motivational" quote images. By choosing from a diverse range of
                        topics such as Relationships, Work, Politics, and more, users can
                        craft their own personalized image. Additionally, they have the
                        option to select a distinct "voice" from characters like Yoda,
                        Forest Gump, Gollum, and others. The result is a truly original and
                        amusing quote image that can be easily shared with friends. Casual
                        users can also save their favorite creations and explore the latest
                        and most popular ones.

                    </p>
                    <h3>About The Project</h3>
                    <p >
                        This website was developed as our team project at <a href="https://deepdivecoding.com/" target="_blank" className="misc-text">Deep Dive Full Stack Web Development Bootcamp</a> (CNM Ingenuity) in Albuquerque, New Mexico (USA) in June 2023.
                    </p>
                    <p>Our team wanted to work on a project that allowed us to practice the skills we were learning and that used AI to do something fun and interesting, and that would be of some use to people after the bootcamp finished.

                    You can read more about the technologies used in this project on our <a href="https://github.com/Capstone-42-quote-gen/ai-quote-generator" target="_blank" className="misc-text">github repo</a></p>                 </Row>
                <Row className="text-center"><p><strong> Like this project? Chip in to help keep this site running (hosting and OpenAI API fees)</strong></p>

                    <a href="https://www.buymeacoffee.com/gloomsmith" target="_blank">
                        <img
                            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                            alt="Buy Me A Coffee"
                            style={{height: '60px', width: '217px'}}
                        />
                    </a></Row>
                <Row className="pt-3">
                    <h3>The Gloomsmith Team (Cohort 42)</h3>
                    <Col xs={12} sm={6} md={4} lg={4}>
                        <Card className="mt-3 h-100">
                            <img src="https://media.licdn.com/dms/image/D5603AQH1FP9hVkoMTw/profile-displayphoto-shrink_800_800/0/1685241156603?e=1692835200&v=beta&t=sf6pd0wcGwl7PTiAffk3P6QlJpnDVpNnI6axjxzLAXM" className="card-img-top" alt="..." />
                            <Card.Body>
                                <Card.Title>Manuel Rascon</Card.Title>
                                <Card.Text className="text-black">
                                    Bilingual Junior Web Developer with experience in JavaScript, React, Dev-Ops, PostgreSQL, and data design. With a strong foundation in front-end and back-end technologies, I am eager to continue expanding my skill sets and explore new technologies while delivering high-quality solutions that make positive impacts.
                                </Card.Text>
                                <Card.Link href="https://www.linkedin.com/in/manuel-rascon">
                                    LinkedIn
                                </Card.Link>
                                <Card.Link href="https://github.com/Manolo323">
                                    GitHub
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={4}>
                        <Card className="mt-3 h-100">
                            <img src="https://media.licdn.com/dms/image/D5603AQHoRwDpA0v1mw/profile-displayphoto-shrink_800_800/0/1687636110009?e=1692835200&v=beta&t=tUy7-ZLeSTEz578fCuMBeTJF1bESsE6_OrhKMBIKuys" className="card-img-top" alt="..." />
                            <Card.Body>
                                <Card.Title>Gurumustuk Khalsa</Card.Title>
                                <Card.Text className="text-black">
                                    Innovative and Entrepreneurial Technologist || Product Management, IT Consulting, Online Communities, Strategic Problem Solving || Building Impactful Products for Millions
                                </Card.Text>
                                <Card.Link href="https://www.linkedin.com/in/gurumustuk-khalsa">
                                    LinkedIn
                                </Card.Link>
                                <Card.Link href="https://github.com/gmustuk">GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4}>
                        <Card className="mt-3 h-100">
                            <img src="https://media.licdn.com/dms/image/D5603AQFTLpnPsTaJxw/profile-displayphoto-shrink_800_800/0/1683310283863?e=1692835200&v=beta&t=syR3oK0v8vumzKI3fxF6f2V7nGZTfc5kSmeFN7IDnZA" className="card-img-top" alt="..." />
                            <Card.Body>
                                <Card.Title>Robert Balch II</Card.Title>
                                <Card.Text className="text-black">
                                    Fullstack Web Dev -Languages-/ JavaScript / Typescript / HTML5 / CSS / postgreSQL / -Tools-/ Docker / Express.js / Redux / Formik / Node.js / Axios
                                </Card.Text>
                                <Card.Link href="https://www.linkedin.com/in/robert-balch-ii-32156826b/">
                                    LinkedIn
                                </Card.Link>
                                <Card.Link href="https://github.com/RSBalchII">
                                    GitHub
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>


            </Container>
            <Footer />
        </>
    );
};
