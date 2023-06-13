import {useParams} from "react-router-dom";
import {useGetPostByPostIdQuery} from "../../../store/apis.ts";
import {GalleryContent} from "../HomeGallery/GalleryContent.tsx";
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