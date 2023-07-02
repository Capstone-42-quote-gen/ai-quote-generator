import {useParams} from "react-router-dom";
import {useGetPostByPostIdQuery} from "../../../store/apis";
import {GalleryContent} from "../HomeGallery/GalleryContent";
import {Navigation} from "../navbar-functions/NavBar";
import {Footer} from "../navbar-functions/Footer.tsx";
import {FourOhFour} from "../../../ui/FourOhFour.tsx";
import {Spinner} from "react-bootstrap";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export function DisplayQuote() {
    const { postId} = useParams()
    const {data: post, isLoading, isError } = useGetPostByPostIdQuery(postId as string)

    if (isLoading) {
        return <><div className="d-flex justify-content-center align-items-center vh-100">
                        <Spinner animation="border" variant="primary" />
        </div></>

    }

    if (isError || post === undefined ) {


    }

    return (
        <>
            <Navigation/>
            <GalleryContent post={post} />
            <Footer/>
        </>
    )
}
