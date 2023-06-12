import {Post} from "../../interfaces/Post";
import {Card, Col, Row} from "react-bootstrap";


interface ProfileGalleryContentProps {
    post: Post
}
export function ProfileGalleryImage(props: ProfileGalleryContentProps) {
    const { post } = props;

    return (
        <>
            <div className="d-flex justify-content-center rounded my-2">
                    <Card className={'quote-image-card'}>
                        <Card.Body className="text-center">
                            <Row className={'justify-content-center'}>
                                <Col>
                                    <Card.Img className={'quote-image img-fluid'} src={post.postPhotoUrl} alt="Quote Image"/>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
            </div>
        </>
    )}