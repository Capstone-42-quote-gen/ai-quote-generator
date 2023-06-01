import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Nav} from "react-bootstrap";
import {Image} from "react-bootstrap";
// import gloomsmith from "../../assets/logo-1.png";
import logo from "../../assets/logo.png";
// import icon from "../../assets/icon-1.png";
export function Navigation() {
    return (
        <Container>
            <a href="/"><Image src={logo} className={'py-3'}/></a>
            <Navbar className="custom-navbar">
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
