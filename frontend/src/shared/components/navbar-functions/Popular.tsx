import {useGetPostByPostIdAndVoteIdQuery} from "../../../store/apis";
import {Navigation} from "./NavBar";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import {Post} from "../../interfaces/Post";

export function DisplayByPopular() {
    const {data, isLoading} = useGetPostByPostIdAndVoteIdQuery("")
    const posts = data ?? []
    console.log(posts)
    if (isLoading) {

        return<>
        </>

    }

    const voteSortedPosts = [...posts].sort(( a, b ) => b.voteCount - a.voteCount)

    return (
        <>
            <Navigation/>
            {posts &&
                voteSortedPosts.map((posts: Post) => (
                    <GalleryContent post={posts}/>
                ))}
        </>
    )
}