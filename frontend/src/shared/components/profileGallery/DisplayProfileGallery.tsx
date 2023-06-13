
import {useGetPostByPostProfileIdQuery} from "../../../store/apis.ts";
import {Post} from "../../interfaces/Post";
import {ProfileGalleryContent} from "./ProfileGalleryContent";
import {Container, Row} from "react-bootstrap";


export function DisplayByProfileId() {

    const { data , isLoading } = useGetPostByPostProfileIdQuery("")
    const posts = data ?? []
    if (isLoading) {

    return <>

    </>
    }

    return (
        <>
            <Container>
            <Row>
            {posts.map((profilePost: Post) => (
                    <ProfileGalleryContent
                        key={profilePost.postProfileId}
                        profilePost={profilePost}/>
                ))}
            </Row>
            </Container>
        </>
    )
}