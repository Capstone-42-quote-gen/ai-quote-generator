import {Navigation} from "./NavBar";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import {useGetPostByVotePostIdQuery} from "../../../store/apis.ts";
import {Post} from "../../interfaces/Post.ts";

export function DisplayByPopular() {
    const {data, isLoading} = useGetPostByVotePostIdQuery("")
    const posts = data ?? []
    console.log(posts)
    if (isLoading) {

        return<>
        </>

    }

    console.log(posts)

    return (
        <>
            <Navigation/>
            {posts &&
                posts.map((posts: Post) => (
                    <GalleryContent  post={posts}/>
    ))}
        </>
    )
}