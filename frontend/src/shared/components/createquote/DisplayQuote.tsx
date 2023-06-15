import {useParams} from "react-router-dom";
import {useGetPostByPostIdQuery} from "../../../store/apis";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import {Navigation} from "../navbar-functions/NavBar";



export function DisplayQuote() {
    const { postId} = useParams()
    const {data: post, isLoading } = useGetPostByPostIdQuery(postId as string)

    console.log(post)
    if (isLoading || post === undefined ) {
        return <>

        </>
    }

    return (
        <>
            <Navigation/>
            <GalleryContent post={post} />
        </>
    )
}