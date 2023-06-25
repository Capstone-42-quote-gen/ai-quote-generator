import {useGetPostByPostCreationTimeQuery} from "../../../store/apis";
import {Navigation} from "./NavBar";
import {Post} from "../../interfaces/Post";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import {Footer} from "./Footer.tsx";

export function DisplayByNew() {
    const { data , isLoading } = useGetPostByPostCreationTimeQuery("")
    const posts = data ?? []
    // console.log(posts)
    if (isLoading) {

        return <>

        </>
    }

    return (
        <>
            <Navigation />
            {posts.map((post: Post) => (
                <GalleryContent post={post} />
                            ))}

            <Footer/>
        </>
    );

}