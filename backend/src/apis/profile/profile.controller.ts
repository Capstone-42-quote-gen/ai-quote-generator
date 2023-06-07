import {Request, Response} from 'express'

import {
    PartialProfile,
    Profile,
    selectPartialProfileByProfileId,
    selectWholeProfileByProfileId,
    updateProfile,
} from "../../utils/models/Profile";
import {Status} from "../../utils/interfaces/Status";

export async function putProfileController (request: Request, response: Response): Promise<Response> {
    try {
        // TODO: Do we want to allow password change??
        const {profileId} = request.params
        const {profileEmail, profilePhotoUrl, profileUsername} = request.body
        const profile = request.session.profile as Profile
        const profileIdFromSession = profile.profileId as string

        const performUpdate = async (partialProfile: PartialProfile): Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(partialProfile.profileId as string) as Profile
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfile(newProfile)
            return response.json({status: 200, data: null, message: 'SignUp successfully updated'})
        }
        const updateFailed = (message: string): Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
            ? await performUpdate({profileId, profileEmail, profileUsername, profilePhotoUrl})
            : updateFailed('You are not allowed to perform this action')

    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function getProfileByProfileId(request: Request, response: Response): Promise<Response>{
    try{
        const {profileId} = request.params
        const postgreSqlResult = await selectPartialProfileByProfileId(profileId)
        const data = postgreSqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}