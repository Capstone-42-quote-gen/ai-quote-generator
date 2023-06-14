import {DisplayByProfileId} from "../shared/components/profileGallery/DisplayProfileGallery";
import {Col, Container, Row} from "react-bootstrap";
import {Navigation} from "../shared/components/navbar-functions/NavBar.tsx";
import {SignOutButton} from "../shared/components/SignOut";

export function Profile() {
    return (
        <>
            <Navigation/>
            <Container className={'my-3'}>
                <Row md={12} className={'g-5'}>
                    <Col>

                    </Col>
                </Row>
            </Container>

            <Container className={'my-3'}>
                <Row className="justify-content-center">
                    <Col xs="auto" className="text-center" >
                        <h1>My Profile: GloomSmith Quotes <SignOutButton /></h1>
                    </Col>
                </Row>

            </Container>
            <DisplayByProfileId/>
        </>
        )
  }