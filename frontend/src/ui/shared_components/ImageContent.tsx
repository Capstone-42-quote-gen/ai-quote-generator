import {Col, Row, Image, Card, Container, Button} from "react-bootstrap";
import img_share from "/src/assets/share.png";
import img_heart_0 from "/src/assets/heart-0.png";
// import img_heart_1 from "/src/assets/heart-1.png";
import img_download from "/src/assets/download.png";
import mountains from "/src/assets/mountains.png";



export function GalleryContent(props: { galleryImageSource: string}) {
    const { galleryImageSource } = props;
    return (
        <>
            <Card>
                <Card.Body>
                    <Row className={'mt-3 justify-content-center'}>
                    <Col md={4}>
                        <Card.Img className={'quote-image img-fluid'} src={galleryImageSource} alt="Quote Image"/>
                    </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className={'text-center'} >
                            <a href={"#"}>#Yoda</a> - <a href={"#"}>#Relationships and Dating</a>
                        </Col>
                    </Row>
                        <Row>
                            <Col className={'text-center'}>
                            <Image src={img_heart_0} className="img-action-icons" height="35" alt="Like"/>
                            <Image src={img_download} className="img-action-icons" height="35" alt="Download"/>
                            <Image src={img_share} className="img-action-icons" height="35" alt="Share"/>
                            </Col>
                        </Row>
                </Card.Body>
            </Card>
<<<<<<< HEAD
=======
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
>>>>>>> b8dbe84ee2e9c56b17f744e12c069b27b0d2e027
        </>
    )}