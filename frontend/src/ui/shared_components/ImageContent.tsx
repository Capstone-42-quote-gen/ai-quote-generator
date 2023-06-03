import {Col, Row, Image, Card} from "react-bootstrap";
import img_share from "/src/assets/share.png";
import img_heart_0 from "/src/assets/heart-0.png";
// import img_heart_1 from "/src/assets/heart-1.png";
import img_download from "/src/assets/download.png";



export function GalleryContent(props: { galleryImageSource: string}) {
    const { galleryImageSource } = props;
    return (
        <>
            <div className="d-flex justify-content-center rounded my-2">
            <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <Card className={'quote-image-card'}>
                    <Card.Body className="text-center">
                        <Row className={'justify-content-center'}>
                            <Col>
                                <Card.Img className={'quote-image img-fluid'} src={galleryImageSource} alt="Quote Image"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'text-center'}>
                                <Image src={img_heart_0} className="img-action-icons" height="35" alt="Like"/>
                                <Image src={img_download} className="img-action-icons" height="35" alt="Download"/>
                                <Image src={img_share} className="img-action-icons" height="35" alt="Share"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'text-center'}>
                                <a href={"#"}>#Yoda</a> - <a href={"#"}>#Relationships and Dating</a>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            </div>



        </>
    )}