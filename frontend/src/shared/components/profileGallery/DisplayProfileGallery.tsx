import { useGetPostsByPostProfileIdQuery } from "../../../store/apis.ts";
import { Post } from "../../interfaces/Post";
import { ProfileGalleryContent } from "./ProfileGalleryContent";
import {Button, Col, Container, Row} from "react-bootstrap";
import { useJwtToken } from "../../hooks/useJwtHook.tsx";

export function DisplayByProfileId() {
    const { profile } = useJwtToken();
    const profileId = profile?.profileId ?? "";
    const { data, isLoading } = useGetPostsByPostProfileIdQuery(profileId);
    const posts = data ?? [];

    if (isLoading) {
        return <></>;
    }

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    {posts.length > 0 ? (
                        posts.map((profilePost: Post) => (
                            <ProfileGalleryContent
                                key={profilePost.postProfileId}
                                profilePost={profilePost}
                            />
                        ))
                    ) : (
                        <div className="text-center" id="create-new-quote-msg">
                            <h4>You haven't created any quotes yet. <br /><a href="/create-quote">Create a quote image here.</a></h4>

                        </div>
                    )}
                </Row>
            </Container>
        </>
    );
}


