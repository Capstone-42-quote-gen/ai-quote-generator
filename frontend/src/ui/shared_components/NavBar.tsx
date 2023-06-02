import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Nav, Row} from "react-bootstrap";
import {Image} from "react-bootstrap";
import logo1 from "../../assets/home-logo.png";
// import gloomsmith from "../../assets/logo-1.png";
// import logo from "../../assets/logo.png";
// import icon from "../../assets/icon-1.png";
export function Navigation() {
    return (
        <Container>
            <Row>
            <a href="/"><Image src={logo1} className={'py-3'} /></a>
            </Row>
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
        </Container>
    );
}