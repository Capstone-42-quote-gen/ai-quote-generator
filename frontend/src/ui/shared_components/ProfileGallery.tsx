export function ProfileGallery(Props: any) {
    const {profileImageSource} = Props
    return (
        <>
            <div>
                <img className={'profile-image img-fluid'} src={profileImageSource} alt=""/>
            </div>
        </>
    )}