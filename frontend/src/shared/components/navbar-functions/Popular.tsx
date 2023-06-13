import {useGetPostByVotePostIdQuery} from "../../../store/apis";
import {Navigation} from "./NavBar";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import {Post} from "../../interfaces/Post";

export function DisplayByPopular() {
    const {data, isLoading} = useGetPostByVotePostIdQuery("")
    const posts = data ?? []
    console.log(posts)
    if (isLoading) {

        return<>
        </>

    }

    return (
        <>
            <Navigation/>
            {posts &&
                posts.map((posts: Post) => (
                    <GalleryContent post={posts}/>
                ))}
        </>
    )
}