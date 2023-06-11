
export interface Profile {
    profileId: string | null,
}

export interface PartialProfile {
    profileEmail: string|null
    profilePhotoUrl: string
    profileUsername: string
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