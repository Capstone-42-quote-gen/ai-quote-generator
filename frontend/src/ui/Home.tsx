import {Navigation} from "../shared/components/NavBar.tsx";
import mountains from "/src/assets/mountains.png";
import {GalleryContent} from "../shared/components/GalleryContent";

export function Home() {
    return (
        <>
            <Navigation/>
            <GalleryContent galleryImageSource={mountains}/>
        </>
    )
}