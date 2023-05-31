import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Nav} from "react-bootstrap";
import {Image} from "react-bootstrap";
import logo from "../../assets/logo-1.png";
export function Navigation() {
    return (
        <Container>
            <Image src={logo} className={'py-3'}/>
            <Navbar className="custom-navbar">
                <Container>
                    <Nav className="w-100 justify-content-evenly">
                        <Nav.Link href="#popular">Popular</Nav.Link>
                        <span className="navbar-divider"></span>
                        <Nav.Link href="#new">New</Nav.Link>
                        <span className="navbar-divider"></span>
                        <Nav.Link href="#mood">Mood</Nav.Link>
                        <span className="navbar-divider"></span>
                        <Nav.Link href="#create">Create</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
}
