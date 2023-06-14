import {Navigation} from "./NavBar";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import {useGetPostByPostIdQuery} from "../../../store/apis.ts";
import {Post} from "../../interfaces/Post.ts";

export function DisplayByPopular() {
    const {data, isLoading} = useGetPostByPostIdQuery("")
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
                    <GalleryContent  post={posts}/>
    ))}
        </>
    )
}