import { Col, Row, Image, Card, Spinner } from "react-bootstrap";
import img_share from "/src/assets/share.png";
import img_heart_0 from "/src/assets/heart-0.png";
// import img_heart_1 from "/src/assets/heart-1.png";
import img_download from "/src/assets/download.png";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces/Post.ts";
import { useGetAllPromptsByPostIdQuery } from "../../../store/apis.ts";
import { Prompt } from "../../interfaces/Prompt.ts";

interface GalleryContentProps {
    post: Post;
}

export function GalleryContent(props: GalleryContentProps) {
    const { post } = props;

    const { data: prompts, isLoading } = useGetAllPromptsByPostIdQuery(post.postId);
    if (isLoading || prompts === undefined) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    let voice: Prompt[] = prompts.filter((prompt) => prompt.promptType === "voice");
    let topic: Prompt[] = prompts.filter((prompt) => prompt.promptType === "topic");

    return (
        <>
            <div className="d-flex justify-content-center rounded my-2">
                <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                    <Card className={'quote-image-card'}>
                        <Card.Body className="text-center">
                            <Row className={'justify-content-center'}>
                                <Col>
                                    <Card.Img className={'quote-image img-fluid'} src={post.postPhotoUrl} alt="Quote Image" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'text-center'}>
                                    <Image src={img_heart_0} className="img-action-icons" height="35" alt="Like" />
                                    <Link to={post.postPhotoUrl} download>
                                        <Image src={img_download} className="img-action-icons" height="35" alt="Download" />
                                    </Link>

                                    {/*TODO: When a user in your application uses a photo, it triggers an event to the download endpoint -
                                 https://help.unsplash.com/en/articles/2511258-guideline-triggering-a-download */}

                                    <Link to={`/display-quote/${post.postId}`}>
                                        <Image src={img_share} className="img-action-icons" height="35" alt="Share" />
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'text-center'}>
                                    <p>
                                        {voice.length > 0 && (
                                            voice.map((item) => (
                                                <a key={item.promptId} href={`/tags/${item.promptId}`}>
                                                    #{item.promptValue}
                                                </a>
                                            ))
                                        )}
                                        &nbsp;-&nbsp;
                                        {topic.length > 0 && (
                                            topic.map((item) => (
                                                <a key={item.promptId} href={`/tags/${item.promptId}`}>
                                                    #{item.promptValue}
                                                </a>
                                            ))
                                        )}
                                    </p>
                                    <div id="photo-credits">
                                        Photo by <a href={post.postPhotographerUrl} target="_blank">{post.postPhotographerName}</a> from <a href='https://unsplash.com/?utm_source=Inspirational_Quotes&utm_medium=referral' target="_blank">Unsplash</a>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}
