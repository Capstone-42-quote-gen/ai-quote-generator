import {Button, Col, Container,  Row} from "react-bootstrap";
import mountains from "/src/assets/mountains.png"
export function ImageContent() {
    return (
        <>
            <Container>
                 <Row className={'mt-3 mx-auto'}>
                     <Col lg={12} className={''}>
                <img className={'ManyImages image-fluid'} src={mountains} alt=""/>
                     </Col>
                 </Row>
                  <Row>
                     <Col lg={12} className={'text-center mt-3'} >
                     <Button>button</Button>
                     </Col>
                  </Row>
            </Container>
        </>
    )}