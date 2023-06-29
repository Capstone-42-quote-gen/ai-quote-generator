import {useGetPostByPostCreationTimeQuery} from "../../../store/apis";
import {Navigation} from "./NavBar";
import {Post} from "../../interfaces/Post";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import {Footer} from "./Footer.tsx";
import {Col, Container, Row} from "react-bootstrap";

export function DisplayByNew() {
    const { data , isLoading } = useGetPostByPostCreationTimeQuery("")
    const posts = data ?? []
    // console.log(posts)
    if (isLoading) {

        return <>

        </>
    }

    return (
        <>
            <Navigation />
            <Container className={'my-3'}>
                <Row className="justify-content-center">

                    <Col xs="auto" className="text-center" >
                        <h2>New Quotes </h2>

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