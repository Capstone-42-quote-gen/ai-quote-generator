import {useGetPostByPostCreationTimeQuery} from "../../../store/apis";
import {Navigation} from "../NavBar";
// import {QuoteImage} from "../../interfaces/CreateQuote";
import {GalleryContent} from "../GalleryContent";
import {Post} from "../../interfaces/Post";

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
                    <GalleryContent post={posts}/>
                ))}
            </>
    )
}