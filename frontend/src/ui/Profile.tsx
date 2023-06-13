import {Navigation} from "../shared/components/NavBar.tsx";
import {ProfileGalleryContent} from "../shared/components/profileGallery/ProfileGalleryContent.tsx";


export function Profile() {
    return (
        <>
            <Navigation/>
            <ProfileGalleryContent/>
        </>
        )
  }