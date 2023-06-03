import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import {Image} from "react-bootstrap";
import logo1 from "../../assets/home-logo.png";
import signIn from "../../assets/sign-in-1.png"
// import gloomsmith from "../../assets/logo-1.png";
// import logo from "../../assets/logo.png";
// import icon from "../../assets/icon-1.png";
export function Navigation() {
    return (
        <Container>
            {/* Centering Logo */}
            <Row className="align-items-center">
                <Col className="text-center">
                    <a href="/"><Image src={logo1} className={'py-3'} /></a>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col lg={11}>
            <Navbar className="custom-navbar mx-auto">
                <Container>
                    <Nav className="w-100 justify-content-evenly">
                        <Nav.Link href="#popular">Popular</Nav.Link>
                        <span className="navbar-divider"></span>
                        <Nav.Link href="#new">New</Nav.Link>
                        <span className="navbar-divider"></span>
                        <Nav.Link href="#topics">Topics</Nav.Link>
                        <span className="navbar-divider"></span>
                        <Nav.Link href="/create-quote">Create</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
                </Col>
                <Col lg={1}>
                    <Nav.Link href="/sign-in"><Image src={signIn} className={"sign-in-icon"} /></Nav.Link>
                </Col>
            </Row>
        </Container>
    );
}