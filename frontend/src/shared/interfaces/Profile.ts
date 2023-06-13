
export interface Profile {
    profileId: string | null
}

export interface PartialProfile {
    profileId: string | null
    profileEmail: string
    profileUsername: string
    profilePhotoUrl: string | null
}

export interface SignIn {
    profileEmail: string,
    profilePassword: string
}
export interface SignUp extends PartialProfile {
    profilePassword: string
}