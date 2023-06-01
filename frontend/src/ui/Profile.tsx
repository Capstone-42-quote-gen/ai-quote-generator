import {Navigation} from "./shared_components/NavBar.tsx";
import {Col, Container, Row, Image} from "react-bootstrap";
import {ImageOnly} from "./shared_components/imageOnly.tsx";
import logo from "../assets/logo-1.png";

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

            <Container>
                <Row className={'g-5'}>
                    <Col md={4}>
                        <ImageOnly/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}