import {Col, Container,  Row} from "react-bootstrap";
import mountains from "../../assets/mountains.png"
import redCheck from "../../assets/Red Check.png"
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
                     <button><img className={'redCheckButton image-fluid'} src={redCheck} alt=""/></button>
                     </Col>
                  </Row>
            </Container>
        </>
    )}