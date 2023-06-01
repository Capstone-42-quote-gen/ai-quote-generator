import {Image} from "react-bootstrap"
export function ProfileGallery(props: {profileImageSource: string}) {
    const {profileImageSource} = props;

    return (
        <>
                <Image className={'profile-image my-3'} src={profileImageSource}/>
        </>
    )}