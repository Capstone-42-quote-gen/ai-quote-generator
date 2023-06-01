import {Navigation} from "./shared_components/NavBar.tsx";
import {Col, Container, Row, Image} from "react-bootstrap";
<<<<<<< HEAD
import {ImageOnly} from "./shared_components/imageOnly.tsx";
import logo from "../assets/logo-1.png";
=======
import {ProfileGallery} from "./shared_components/ProfileGallery.tsx";
import mountains from "../../assets/mountains.png"
import logo from "../../src/assets/logo-1.png"
>>>>>>> imageContent

export function Profile() {
    return (
        <>

            <Navigation/>
<<<<<<< HEAD
            <Container className={'my-3'}>
                <Row md={12} className={'g-5'}>
                    <Col>
                        <Image src={logo} className={'ProfileImage image-fluid'}/>
=======
            <ProfileGallery profileImageSource={mountains}/>
            <h1>Profile</h1>
            <Container className={'my-3'}>
                <Row md={12} className={'g-5'}>
                    <Col>
                        <Image src={logo} className={'py-3'}/>
>>>>>>> imageContent
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
<<<<<<< HEAD

            <Container>
                <Row>

                </Row>
            </Container>
                        <ImageOnly/>
=======
            <Container>
                <Row>
                </Row>
            </Container>
            <ProfileGallery/>
>>>>>>> imageContent
        </>
    )
}