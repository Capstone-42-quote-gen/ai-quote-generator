import {useGetPostByPostCreationTimeQuery} from "../../../store/apis";
import {Navigation} from "./NavBar";
// import {QuoteImage} from "../../interfaces/CreateQuote";
import {Post} from "../../interfaces/Post";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import LazyLoad from 'react-lazy-load';
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
                // <LazyLoad key={post.postId} height={762} offset={300}>
                    <GalleryContent post={post} />
                 // </LazyLoad>
            ))}

<Footer/>
        </>
    );

}