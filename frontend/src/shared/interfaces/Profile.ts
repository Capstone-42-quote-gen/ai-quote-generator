
export interface Profile {
    profileId: string | null,
}

export interface PartialProfile {

    profileUsername: string
    profilePhotoUrl: string|null
    profileEmail: string
    profilePassword: string
}

export interface SignIn {
    profileEmail: string,
    profilePassword: string
}
export interface SignUp extends PartialProfile {
    profileUsername: string,
    profileEmail: string,
    profilePassword: string
}