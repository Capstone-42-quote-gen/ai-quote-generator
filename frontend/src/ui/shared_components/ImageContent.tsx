import {Col, Container,  Row} from "react-bootstrap";
import mountains from "/src/assets/mountains.png";
import img_share from "/src/assets/share.png";
import img_heart_0 from "/src/assets/heart-0.png";
// import img_heart_1 from "/src/assets/heart-1.png";
import img_download from "/src/assets/download.png";


export function ImageContent() {
    return (
        <>
            <Container>
                 <Row className={'mt-3 justify-content-center'}>
                     <Col md={4}>
            <img className={'quote-image img-fluid'} src={mountains} alt="Quote Image"/>
                         <p>
                             <img src={img_heart_0} className="img-action-icons" height="35" alt="Like"/>
                             <img src={img_download} className="img-action-icons" height="35" alt="Download"/>
                             <img src={img_share} className="img-action-icons" height="35" alt="Share"/>
                         </p>
                     </Col>
                 </Row>

                <Row>
                    <Col lg={12} className={'text-center'} >
                        <a href={"#"}>#Yoda</a> - <a href={"#"}>#Relationships and Dating</a>
                    </Col>
                </Row>
            </Container>
        </>
    )}