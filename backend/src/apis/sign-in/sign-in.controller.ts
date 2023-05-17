import { Request, Response } from 'express'
import 'express-session'
import { v4 as uuid } from 'uuid'
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {Profile, selectProfileByProfileEmail} from "../../utils/models/Profile";

export async function signInController (request: Request, response: Response): Promise<Response> {
    try {
        const {profileEmail, profilePassword} = request.body
        const profile: Profile | null = await selectProfileByProfileEmail(profileEmail)

        return (profile !== null) && await validatePassword(profile.profileHash, profilePassword)
            ? signInSuccessful(request, response, profile)
            : signInFailed(response)
    } catch (error: any) {
        console.log(error)
        return response.json({ status: 500, data: null, message: error.message})
    }
}

function signInFailed (response: Response): Response {
    return response.json({ status: 400, message: 'Email or password is incorrect. Please try again', data: null })
}

function signInSuccessful (request: Request, response: Response, profile: Profile): Response {
    const { profileId, profileUsername, profileEmail, profilePhotoUrl } = profile
    const signature: string = uuid()
    const authorization: string = generateJwt({
        profileId,
        profileUsername,
        profileEmail,
        profilePhotoUrl
    }, signature)

    request.session.profile = profile
    request.session.jwt =  authorization
    request.session.signature = signature

    response.header({
        authorization
    })
    return response.json({
        status: 200,
        message: 'Sign in successful',
        data: null
    })
}