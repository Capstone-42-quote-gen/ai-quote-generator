import {sql} from "../database.utils";

export interface Profile {
profileId: string|null
profileActivationToken: string|null
profileCreationTime: string|null
profileEmail: string
profileHash: string
profilePhotoUrl: string
profileUsername: string
}

export async function insertProfile (profile: Profile): Promise<string> {
    const {profileActivationToken, profileEmail, profileHash, profilePhotoUrl, profileUsername} = profile
    await sql `INSERT INTO profile (profile_id, profile_activation_token, profile_creation_time, profile_email, profile_hash, profile_photo_url, profile_username) VALUES (gen_random_uuid(), ${profileActivationToken},now(), ${profileEmail}, ${profileHash}, ${profilePhotoUrl}, ${profileUsername})`
    return 'Profile created.'
}

export async function selectProfileByProfileActivationToken (profileActivationToken: string): Promise<Profile|null> {
    const result = <Profile[]>await sql `SELECT profile_id_profile_activation_token, profile_username, profile_photo_url, profile_password FROM profile WHERE profile_activation_token = ${profileActivationToken}`
}