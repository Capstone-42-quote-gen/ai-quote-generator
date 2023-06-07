
export interface Profile extends PartialProfile {
    profileId: string,
}

export interface PartialProfile {
    profileUsername: string,
    profileEmail: string,
    profilePassword: string
}