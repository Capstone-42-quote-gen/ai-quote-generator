import { Request, Response } from 'express'
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {insertProfile, Profile} from "../../utils/models/Profile";
import {Status} from "../../utils/interfaces/Status";
import Client from "mailgun.js/client";


export async function signUpProfileController (request: Request, response: Response): Promise<Response | undefined> {
    try {
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})


        const {profileEmail, profilePassword, profileUsername} = request.body
        const profileHash = await setHash(profilePassword)
        const profileActivationToken = setActivationToken()
       // TODO Update profilePhotoURL to allow user to actually upload the image if we still want to allow.
        const profilePhotoUrl = "https://placekitten.com/200/300"

        const basePath: string = `${request.protocol}://${request.hostname}${request.originalUrl}/activation/${profileActivationToken}`

        const message = `<h2>Thanks for signing on Gloomsmith</h2> 
        <p>To get started please click the below link to activate your account so you can get started with creating funny AI generated de-motivational quotes.</p>
        <p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Gloomsmith <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to:profileEmail,
            subject:"Activate your Gloomsmith.lol Account",
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

// TODO: Disable sending email activation email since login isn't properly setup to restrict  users that are not activated, and need proper html formatting for activation success message.
//         await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)



        const status: Status = {
            status: 200,
            message:'Account successfully created. You can now login with your new account. Close this window and login.',
            // message:'Account successfully created. Please check your email to activate your account.',
            data: null
        }
        return response.json(status)
    }catch (error: any) {
        console.log(error)
        const status: Status = {
            status: 500,
            message: error.message,
            data:null
        }
        return response.json(status)
    }
}