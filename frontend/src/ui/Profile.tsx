import {Navigation} from "./shared_components/NavBar.tsx";
import {ImageContent} from "./shared_components/ImageContent.tsx";
import {Col, Row} from "react-bootstrap";

export function Profile() {
    return (
        <>

            <Navigation/>
            <Row>
                <Col md={4} >
                    <ImageContent/>
                </Col>

                    <Col md={4}>
                        <ImageContent/>
                    </Col>

                <Col md={4}>
                    <ImageContent/>
                </Col>
           </Row>
            <Row>
                <Col md={4} >
                    <ImageContent/>
                </Col>

                <Col md={4}>
                    <ImageContent/>
                </Col>

                <Col md={4}>
                    <ImageContent/>
                </Col>
            </Row>
            <h1>Profile</h1>
        </>
    )
}