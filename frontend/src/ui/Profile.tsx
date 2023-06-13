import {DisplayByProfileId} from "../shared/components/profileGallery/DisplayProfileGallery";
import {Col, Container, Row} from "react-bootstrap";
import {Navigation} from "../shared/components/navbar-functions/NavBar.tsx";

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
                <Row>
                    <Col md={6}>
                        <br/>
                        <h4>About me</h4>
                        <p>Something about me.Nullus pisces est maior quam amicitia inter Marlin et Dory. In via
                            sua,
                            per mundum submari, rebus mirabilibus plena, inveniunt multos habitatores marinos.
                        </p>
                        <br/>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}></Col>
                </Row>
            </Container>
            <DisplayByProfileId/>
        </>
        )
  }