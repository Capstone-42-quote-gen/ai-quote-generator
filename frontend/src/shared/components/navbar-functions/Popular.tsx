import { Navigation } from "./NavBar";
import { GalleryContent } from "../HomeGallery/GalleryContent";
import { useGetPostByVotePostIdQuery } from "../../../store/apis.ts";
import { Post } from "../../interfaces/Post.ts";
import {Footer} from "./Footer.tsx";
import {Col, Container, Row} from "react-bootstrap";

export function DisplayByPopular() {
    const { data, isLoading } = useGetPostByVotePostIdQuery("");
    const posts = data ?? [];

    if (isLoading) {
        return null;
    }

    return (
        <>
            <Navigation />
            <Container className={'my-3'}>
                <Row className="justify-content-center">

                    <Col xs="auto" className="text-center" >
                        <h2>Popular Quotes </h2>

                    </Col>
                </Row>

            </Container>


            {posts.map((post: Post) => (
               <GalleryContent post={post} />

            ))}
            <Footer/>
        </>
    );
}
