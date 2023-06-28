import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import {Image} from "react-bootstrap";
import signIn from "../../../assets/sign-in-icon.png";
import logo from "../../../assets/gloomSmithLogo-blue.png";
import {Link} from "react-router-dom";
import {useJwtToken} from "../../hooks/useJwtHook.tsx";



export function Navigation() {
    const { profile } = useJwtToken()

    let navLink;
    if (profile) {
        navLink = (
            <Nav.Link as={Link} to="/profile">
                <Image
                    src={signIn}
                    className={"sign-in-icon p-0 mb-1 me-2"}
                />
                Profile
            </Nav.Link>
        );
    } else {
        navLink = (
            <Nav.Link
                as={Link}
                to="/sign-in" >
                <Image
                    src={signIn}
                    className={"sign-in-icon p-0 mb-1 me-2"}
                />
                Profile
            </Nav.Link>
        );
    }

    return (
        <Container fluid>
            {/* Centering Logo */}
            <Row className="align-items-center">
                <Col className="text-center">
                    <a href="/">
                        <Image fluid src={logo}
                               className={'py-3'} /><br />
                    </a>
                    <div id="tagline">Where AI Crafts Hilariously Demotivating Quotes</div>
                </Col>
            </Row>
            {/*<Row className="align-items-center">*/}
            <Navbar className={"custom-navbar mx-auto}"}>
                {/*<Container>*/}
                {/*    <Navbar.Toggle aria-controls={"responsive-navbar-nav"} />*/}
                    {/*<Navbar.Collapse id={"responsive-navbar-nav"}>*/}
                    <Nav className={"w-100 justify-content-evenly"}>
                        <Nav.Link href="/popular">Popular</Nav.Link>
                        <span className={"navbar-divider"}></span>
                        <Nav.Link href="/new">
                            New
                        </Nav.Link>
                        <span className={"navbar-divider"}></span>
                        <Nav.Link href="/create-quote">
                            Create
                        </Nav.Link>
                        <span className={"navbar-divider"}>
                        </span>
                        <div>
                            {navLink}
                        </div>
                    </Nav>
                    {/*</Navbar.Collapse>*/}
                {/*</Container>*/}
            </Navbar>
            {/*</Row>*/}
        </Container>
    );
}