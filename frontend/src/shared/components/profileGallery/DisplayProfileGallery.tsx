

import {useGetPostByPostProfileIdQuery} from "../../../store/apis.ts";
import {Post} from "../../interfaces/Post";
import {ProfileGalleryContent} from "./ProfileGalleryContent";
import {Navigation} from "../navbar-functions/NavBar";


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