import {Navigation} from "./shared_components/NavBar.tsx";
import {GalleryContent} from "./shared_components/ImageContent.tsx";
import mountains from "/src/assets/mountains.png";

export function Home() {
    return (
        <>
            <Navigation/>
            <GalleryContent galleryImageSource={mountains}/>
        </>
    )
}