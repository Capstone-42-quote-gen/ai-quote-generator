import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import {Image} from "react-bootstrap";
import signIn from "../../../assets/sign-in-icon.png";
import logo from "../../../assets/gloomSmithLogo-pink.png";
import robot from "../../../assets/icons8-bot-48.png";
import robotActive from "../../../assets/icons8-bot-48-active.png";
import heart from "../../../assets/heart-0.png";
import heartActive from "../../../assets/heart-1.png";
import star from "../../../assets/icons8-star-24.png";
import starActive from "../../../assets/icons8-star-50-active.png"; // The new active star image
import {Link, useLocation} from "react-router-dom";
import {useJwtToken} from "../../hooks/useJwtHook.tsx";

export function Navigation() {
    const { profile } = useJwtToken()
    const location = useLocation();

    // Function to return the correct heart image
    const getHeartImage = () => {
        if (location.pathname === '/popular' || location.pathname === '/') {
            return heartActive;
        } else {
            return heart;
        }
    };

    // Function to return the correct star image
    const getStarImage = () => {
        if (location.pathname === '/new') {
            return starActive;
        } else {
            return star;
        }
    };


    // Function to return the correct star image
    const getBotImage = () => {
        if (location.pathname === '/create-quote') {
            return robotActive;
        } else {
            return robot;
        }
    };

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
            <Navbar className={"custom-navbar mx-auto"}>
                <Nav className={"w-100 justify-content-evenly"}>
                    <Nav.Link href="/create-quote">
                        <Image
                            src={robotActive}
                            className={"sign-in-icon p-0 mb-1 me-2"}
                        /> Create
                    </Nav.Link>
                    <span className={"navbar-divider"}></span>
                    <Nav.Link href="/new">
                        <Image
                            src={getStarImage()}
                            className={"sign-in-icon p-0 mb-1 me-2"}
                        />
                        New
                    </Nav.Link>
                    <span className={"navbar-divider"}></span>
                    <Nav.Link href="/popular">
                        <Image
                            src={getHeartImage()}
                            className={"sign-in-icon p-0 mb-1 me-2"}
                        />
                        Popular
                    </Nav.Link>
                    <span className={"navbar-divider"}>
                    </span>
                    <div>
                        {navLink}
                    </div>
                </Nav>
            </Navbar>
        </Container>
    );
}
