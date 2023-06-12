import {Navigation} from "../shared/components/NavBar.tsx";
import {GalleryContent} from "../shared/components/GalleryContent.tsx";
import mountains from "/src/assets/mountains.png";

export function Home() {
    return (
        <>
            <Navigation/>
            <GalleryContent galleryImageSource={mountains}/>
        </>
    )
}