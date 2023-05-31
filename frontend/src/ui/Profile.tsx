import {Navigation} from "./shared_components/NavBar.tsx";
import {ImageContent} from "./shared_components/ImageContent.tsx";

export function Profile() {
    return (
        <>
            <Navigation/>
            <ImageContent/>
            <h1>Profile</h1>
        </>
    )
}