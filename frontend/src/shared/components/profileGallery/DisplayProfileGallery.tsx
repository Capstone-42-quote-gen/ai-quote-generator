import {useGetPostsByPostProfileIdQuery} from "../../../store/apis";
import {Post} from "../../interfaces/Post";
import {ProfileGalleryContent} from "./ProfileGalleryContent";
import {Container, Row} from "react-bootstrap";


export function DisplayByProfileId() {

    const { data , isLoading } = useGetPostsByPostProfileIdQuery('postProfileId')
    const posts = data ?? []
    if (isLoading) {

    return <></>
    }
                        
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                {posts.map((profilePost: Post) => (
                    <ProfileGalleryContent
                        key={profilePost.postPhotoUrl}
                        profilePost={profilePost}
                    />
                ))}
            </Row>
            </Container>
        </>
    )
}