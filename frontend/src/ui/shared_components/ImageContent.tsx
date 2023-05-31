import {Button, Col, Container,  Row} from "react-bootstrap";
import mountains from "/src/assets/mountains.png"
export function ImageContent() {
    return (
        <>
            <Container>
                 <Row className={'mt-3 justify-content-center'}>
                     <Col md={4}>
            <img className={'ManyImages image-fluid'} src={mountains} alt=""/>
                     </Col>
                 </Row>
                  <Row>
                     <Col md={12} className={'mt-3 text-center'} >
                     <Button className={'voteButton'}>Vote</Button>
                     </Col>
                  </Row>
            </Container>
        </>
    )}