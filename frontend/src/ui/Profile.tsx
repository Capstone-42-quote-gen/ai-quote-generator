import {Navigation} from "./shared_components/NavBar.tsx";
import {Col, Container, Row, Image} from "react-bootstrap";
import {ProfileGallery} from "./shared_components/ProfileGallery.tsx";
import mountains from "../../assets/mountains.png"
import logo from "../../src/assets/logo-1.png"

export function Profile() {
    return (
        <>
            <Navigation/>
            <ProfileGallery profileImageSource={mountains}/>
            <h1>Profile</h1>
            <Container className={'my-3'}>
                <Row md={12} className={'g-5'}>
                    <Col>
                        <Image src={logo} className={'py-3'}/>
                    </Col>
                </Row>
                <Row md={12}>
                    <Col md={6}>
                        <h4>About me</h4>
                        <p>Something about me.Nullus pisces est maior quam amicitia inter Marlin et Dory. In via sua, per mundum submari, rebus mirabilibus plena, inveniunt multos habitatores marinos.
                        </p>
                    </Col>
                </Row>
                <Row md={12}>
                    <Col md={3}></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                </Row>
            </Container>
            <ProfileGallery/>
        </>
    )
}