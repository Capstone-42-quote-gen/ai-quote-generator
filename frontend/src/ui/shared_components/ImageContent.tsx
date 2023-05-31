import {Button, Col, Container,  Row} from "react-bootstrap";
import mountains from "/src/assets/mountains.png"
export function ImageContent() {
    return (
        <>
            <Container>
                 <Row className={'mt-3'}>
                     <Col lg={9} className={''}>
            <img className={'ManyImages image-fluid m-2'} src={mountains} alt=""/>
                     </Col>
                     <Col lg={3} className={'text-center mt-3'} >
                     <Button>button</Button>
                     </Col>
                 </Row>
            </Container>
        </>
    )}