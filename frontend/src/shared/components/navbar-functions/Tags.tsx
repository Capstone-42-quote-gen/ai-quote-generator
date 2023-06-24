import { useGetPostsByPromptIdQuery} from "../../../store/apis.ts";
import {Post} from "../../interfaces/Post.ts";
import {GalleryContent} from "../HomeGallery/GalleryContent.tsx";
import {Navigation} from "./NavBar.tsx";
import {useParams} from "react-router-dom";
import {Footer} from "./Footer.tsx";

export function DisplayTags() {

    const {promptId} = useParams()

    const { data , isLoading } = useGetPostsByPromptIdQuery(promptId as string)
    const posts = data ?? []
    // console.log(posts)
    if (isLoading) {

        return <>

        </>
    }

    return (
        <>
            <Navigation/>
            {posts &&
                posts.map((posts: Post) => (
                    <GalleryContent post={posts} />
                ))}
            <Footer/>
        </>
    )
}