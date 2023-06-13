
import {useGetPostByPostProfileIdQuery} from "../../../store/apis.ts";
import {Post} from "../../interfaces/Post";
import {ProfileGalleryContent} from "./ProfileGalleryContent";


export function DisplayByProfileId() {
    const { data , isLoading } = useGetPostByPostProfileIdQuery("")
    const posts = data ?? []
    console.log(posts)
    if (isLoading) {

        return <>

        </>
    }

    return (
        <>
            {posts.map((profilePost: Post) => (
                    <ProfileGalleryContent key={profilePost.postProfileId} profilePost={profilePost}/>
                ))}
        </>
    )
}