import {Navigation} from "../shared/components/NavBar.tsx";
import {GalleryContent} from "../shared/components/ImageContent";
import mountains from "/src/assets/mountains.png";
// import {SignIn} from "./shared_components/SignIn";

export function Home() {
    return (
        <>
            <Navigation/>
            <GalleryContent galleryImageSource={mountains}/>
        </>
    )
}