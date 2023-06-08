import {Navigation} from "../shared/components/NavBar.tsx";
import {GalleryContent} from "../shared/components/ImageContent.tsx";
import mountains from "/src/assets/mountains.png";


export function DisplayQuote() {
    return (
        <>
            <Navigation/>
            <GalleryContent galleryImageSource={mountains}/>
        </>
    )
}