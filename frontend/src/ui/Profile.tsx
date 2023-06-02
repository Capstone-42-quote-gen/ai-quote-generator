import {Navigation} from "./shared_components/NavBar.tsx";
import {ProfileGallery} from "./shared_components/ProfileGallery.tsx";
import logo from "../../src/assets/logo-1.png"
import {Col, Container, Row, Image} from "react-bootstrap";
import mountains from "/src/assets/mountains.png";

export function Profile() {
    return (
        <>
            <Navigation/>
            <Container className={'my-3'}>
                <Row md={12} className={'g-5'}>
                    <Col>
                 <Image src={logo} className={'ProfileImage image-fluid'}/>
                    </Col>
                 </Row>
            </Container>
            <Container className={'my-3'}>
                <Row>
                    <Col md={6}>
                        <h4>About me</h4>
                        <p>Something about me.Nullus pisces est maior quam amicitia inter Marlin et Dory. In via sua,
                            per mundum submari, rebus mirabilibus plena, inveniunt multos habitatores marinos.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                <Col xs={4} lg={4}>
                <ProfileGallery profileImageSource={mountains}/>
                </Col>
                </Row>
            </Container>

        </>
        )
  }