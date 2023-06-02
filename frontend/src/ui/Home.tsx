import {Navigation} from "./shared_components/NavBar.tsx";
import {GalleryContent} from "./shared_components/ImageContent.tsx";
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