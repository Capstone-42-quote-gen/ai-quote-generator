import {Col, Row, Image, Card, Spinner, Button} from "react-bootstrap";
import img_share from "/src/assets/share.png";
import img_heart_0 from "/src/assets/heart-0.png";
import img_heart_1 from "/src/assets/heart-1.png";
import img_download from "/src/assets/download.png";
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import {Post} from "../../interfaces/Post";
import {
    useGetAllPromptsByPostIdQuery,
    useGetProfileByProfileIdQuery,
    useGetVotesByVotePostIdQuery,
    usePostVoteMutation
} from "../../../store/apis";
import {Prompt} from "../../interfaces/Prompt";
import {useState} from "react";

interface GalleryContentProps {
    post: Post;
}

function decodeHTML(text: string): string {
    const element = document.createElement("textarea");
    element.innerHTML = text;
    return element.textContent || element.innerText;
}

export function GalleryContent(props: GalleryContentProps) {
    const {post} = props;
    const decodedPostQuote = decodeHTML(post.postQuote);
    const [voted, setVoted] = useState(false)
    const {data: prompts, isLoading} = useGetAllPromptsByPostIdQuery(post.postId);
    const [submitVote] = usePostVoteMutation()
    const {data: profile, isLoading: profileIsLoading} = useGetProfileByProfileIdQuery(post.postProfileId)
    const {data: votes, isLoading: votesIsLoading, refetch} =
        useGetVotesByVotePostIdQuery(post.postId)

    if (isLoading || prompts === undefined) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="primary"/>
            </div>
        );
    }
    let voice: Prompt[] = prompts.filter((prompt) => prompt.promptType === "voice");
    let topic: Prompt[] = prompts.filter((prompt) => prompt.promptType === "topic");
    if (profileIsLoading || profile === undefined) {
        return <></>
    }

    if (votesIsLoading || votes === undefined) {
        return <></>
    }

    const clickVote = async () => {

        await submitVote({votePostId: post.postId})
        await refetch()
        if (voted) {
            setVoted(false);
        } else {
            setVoted(true)
        }
    }

    if (profile === null) {
        return (<></>)
    }

    return (
        <>
            <Helmet>
                <meta property="og:image" content={post.postPhotoUrl}/>
                <meta property="og:image:alt" content={decodedPostQuote}/>
                <meta property="og:image:width" content="1080"/>
            </Helmet>


            <div className="d-flex justify-content-center rounded my-4">
                <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                    <Card className={'quote-image-card'}>
                        <Card.Body className="text-center">
                            <Row className={'justify-content-center'}>
                                <Col>
                                    <Link to={`/display-quote/${post.postId}`}>
                                        <Card.Img
                                            className={'quote-image img-fluid'}
                                            src={post.postPhotoUrl}
                                            alt="Quote Image"/>
                                    </Link>
                                </Col>

                            </Row>
                            <Row>
                                <Col className={'text-center'}>
                                    <Button disabled={isLoading}
                                            onClick={clickVote}
                                            className={"post-vote-btn mt-3"}
                                            size={"sm"}
                                    >
                                        {votes.length > 0 && (
                                            <span className={"vote-count me-2"}>{votes.length}</span>
                                        )}
                                        <Image
                                            src={votes.length > 0 ? img_heart_1 : img_heart_0} height="35"
                                            className={"vote-icon"}/>
                                    </Button>
                                    <Link to={post.postPhotoUrl} download>
                                        <Image src={img_download} className="img-action-icons" height="35"
                                               alt="Download"/>
                                    </Link>

                                    {/*TODO: When a user in your application uses a photo, it triggers an event to the download endpoint -
                                 https://help.unsplash.com/en/articles/2511258-guideline-triggering-a-download */}

                                    <Link to={`/display-quote/${post.postId}`}>
                                        <Image src={img_share} className="img-action-icons" height="35" alt="Share"/>
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
                                    <div id="quote-text">{decodedPostQuote}</div>

                                    <div id="photo-credits">
                                        Photo by <a
                                        href={`${post.postPhotographerUrl}?utm_source=Gloomsmith&utm_medium=referral`}
                                        target="_blank">{post.postPhotographerName}</a> from <a
                                        href='https://unsplash.com/?utm_source=Gloomsmiths&utm_medium=referral'
                                        target="_blank">Unsplash</a>
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