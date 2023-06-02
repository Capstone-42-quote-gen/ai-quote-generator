import {Col, Row, Image, Card} from "react-bootstrap";
import img_share from "/src/assets/share.png";
import img_heart_0 from "/src/assets/heart-0.png";
// import img_heart_1 from "/src/assets/heart-1.png";
import img_download from "/src/assets/download.png";


export function GalleryContent(props: { galleryImageSource: string}) {
    const { galleryImageSource } = props;
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
        </>
    )}