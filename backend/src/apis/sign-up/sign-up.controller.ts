import { Request, Response } from 'express'
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {insertProfile, Profile} from "../../utils/models/Profile";
import {Status} from "../../utils/interfaces/Status";


export async function signUpProfileController (request: Request, response: Response): Promise<Response | undefined> {
    try {
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})

        const {profileEmail, profilePassword, profileUsername} = request.body
        const profileHash = await setHash(profilePassword)
        const profileActivationToken = setActivationToken()
        const profilePhotoUrl = "https://placekitten.com/200/300"

        const basePath: string = `${request.protocol}://${request.hostname}/${request.originalUrl}/activation/${profileActivationToken}`
        // TODO rename sign up message when we find a name change p too
        const message = `<h2>Thanks for signing into</h2> 
        <p>Copy and paste your link to activate your account</p>
        <p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@{process.env.MAILGUN_DOMAIN as string}>`,
            to:profileEmail,
            Subject:"Almost there!",
            html: message
        }

        const profile: Profile = {
        profileId: null,
        profileActivationToken,
        profileCreationTime: null,
        profileEmail,
        profileHash,
        profilePhotoUrl,
        profileUsername

        }
        await insertProfile(profile)

        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

        const status: Status = {
            status: 200,
            message:'Profile successfully created. Please check your inbox.',
            data: null
        }
        return response.json(status)
    }catch (error: any) {
        const status: Status = {
            status: 500,
            message: error.message,
            data:null
        }
        return response.json(status)
    }
}