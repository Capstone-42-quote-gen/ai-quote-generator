import {useGetPostByPostCreationTimeQuery} from "../../../store/apis.ts";
import {Navigation} from "../NavBar.tsx";
import {Post} from "../../interfaces/Post.ts";
import {ProfileGalleryContent} from "./ProfileGalleryContent.tsx";


export function DisplayByNew() {
    const { data , isLoading } = useGetPostByPostCreationTimeQuery("")
    const posts = data ?? []
    console.log(posts)
    if (isLoading) {

        return <>

        </>
    }

    return (
        <>
            <Navigation/>
            {posts &&
                posts.map((posts: Post) => (
                    <ProfileGalleryContent post={posts}/>
                ))}
        </>
    )
}