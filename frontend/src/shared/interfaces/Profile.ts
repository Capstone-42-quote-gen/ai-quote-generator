
export interface Profile {
    profileId: string | null,
}

export interface PartialProfile {
    profileEmail: string,

    profileUsername: string
    // profilePhotoUrl: string|null
    profilePassword: string
}

export interface SignIn {
    profileEmail: string,
    profilePassword: string
}
export interface SignUp extends PartialProfile {
    profileEmail: string,
    profileUsername: string,
    profilePassword: string
}