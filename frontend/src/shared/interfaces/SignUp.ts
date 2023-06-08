
export interface SignUp extends PartialSignUp {
    profileId: string,
}

export interface PartialSignUp {
    profileUsername: string,
    profileEmail: string,
    profilePassword: string
}