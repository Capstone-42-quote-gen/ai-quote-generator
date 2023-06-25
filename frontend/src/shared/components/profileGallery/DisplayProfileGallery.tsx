
import {useGetPostsByPostProfileIdQuery} from "../../../store/apis.ts";
import {Post} from "../../interfaces/Post";
import {ProfileGalleryContent} from "./ProfileGalleryContent";
import {Container, Row} from "react-bootstrap";


export function DisplayByProfileId() {

    const { data , isLoading } = useGetPostsByPostProfileIdQuery("")
    const posts = data ?? []
    if (isLoading) {
    console.log(useGetPostsByPostProfileIdQuery)
    return <></>;
    }

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                {posts.map((profilePost: Post) => (
                    <ProfileGalleryContent
                        key={profilePost.postProfileId}
                        profilePost={profilePost}
                    />
                ))}
            </Row>
            </Container>
        </>
    )
}