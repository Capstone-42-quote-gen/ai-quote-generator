import {sql} from "../database.utils";


export interface PartialProfile {
    profileId: string|null
    profileEmail: string
    profilePhotoUrl: string
    profileUsername: string
}

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
    return 'profile created.'
}

export async function selectPartialProfileByProfileId(profileId:string): Promise<Profile|null> {
    const result = <Profile[]>await sql`SELECT profile_id, profile_username, profile_photo_url, profile_email from profile WHERE profile_id = ${profileId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectProfileByProfileEmail (profileEmail: string): Promise<Profile | null> {
    const result = <Profile[]>await sql `SELECT profile_id, profile_activation_token, profile_username, profile_email, profile_hash, profile_photo_url FROM profile WHERE profile_email = ${profileEmail}`
    return result?.length === 1 ? result[0] : null
}

export async function selectWholeProfileByProfileId(profileId: string): Promise<Profile|null> {
    const result = <Profile[]>await sql `SELECT profile_id, profile_activation_token, profile_username, profile_photo_url, profile_email, profile_hash FROM profile WHERE profile_id = ${profileId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectProfileByProfileActivationToken (profileActivationToken: string): Promise<Profile|null> {

    const result = <Profile[]>await sql `SELECT profile_id, profile_activation_token, profile_username, profile_photo_url, profile_email, profile_hash FROM profile WHERE profile_activation_token = ${profileActivationToken}`
    return result?.length === 1 ? result[0] : null
}

export async function updateProfile (profile: Profile): Promise<string> {
    const { profileId, profileActivationToken, profileEmail, profileHash, profileUsername} = profile
    await sql `UPDATE profile SET profile_activation_token = ${profileActivationToken}, profile_email = ${profileEmail}, profile_hash = ${profileHash}, profile_username = ${profileUsername} WHERE profile_id = ${profileId}`
    return 'profile updated'
}