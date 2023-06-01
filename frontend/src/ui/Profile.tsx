import {Navigation} from "./shared_components/NavBar.tsx";
import {Col, Container, Row} from "react-bootstrap";
import {ImageOnly} from "./shared_components/imageOnly.tsx";

export function Profile() {
    return (
        <>

            <Navigation/>
            <Container className={''} >
            <Row md={12}>
                <Col md={3} className={''} ></Col>
            </Row>
                <Row md={12}>
                <Col md={3} className={''} ></Col>
            </Row>
                <Row md={12}>
                <Col md={3} className={''} ></Col>
            </Row>
            </Container>

            <Container>
            <Row className={'g-5'}>
                <Col md={4} >
                    <ImageOnly/>
                </Col>                <Col md={4} >
                    <ImageOnly/>
                </Col>                <Col md={4} >
                    <ImageOnly/>
                </Col>                <Col md={4} >
                    <ImageOnly/>
                </Col>                <Col md={4} >
                    <ImageOnly/>
                </Col>                <Col md={4} >
                    <ImageOnly/>
                </Col>

            </Row>
            </Container>
        </>
    )
}