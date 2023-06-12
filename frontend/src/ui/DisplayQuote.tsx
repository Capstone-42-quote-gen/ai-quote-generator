import {Navigation} from "../shared/components/NavBar.tsx";
import {GalleryContent} from "../shared/components/GalleryContent.tsx";
import {useParams} from "react-router-dom";
import {useGetPostByPostIdQuery} from "../store/apis.ts";



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