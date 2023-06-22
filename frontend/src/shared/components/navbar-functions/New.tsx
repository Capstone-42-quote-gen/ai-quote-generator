import {useGetPostByPostCreationTimeQuery} from "../../../store/apis";
import {Navigation} from "./NavBar";
// import {QuoteImage} from "../../interfaces/CreateQuote";
import {Post} from "../../interfaces/Post";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import LazyLoad from 'react-lazyload';

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
                <LazyLoad key={post.postId} height={1800} offset={1800}>
                    <GalleryContent post={post} />
                </LazyLoad>
            ))}
        </>
    );

}