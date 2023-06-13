

import {useGetPostByPostProfileIdQuery} from "../../../store/apis.ts";
import {Navigation} from "../NavBar";
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
            <Navigation/>
            {posts.map((post: Post) => (
                    <ProfileGalleryContent key={post.postProfileId} profilePost={post}/>
                ))}
        </>
    )
}