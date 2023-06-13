import { Schema } from 'express-validator'
import {selectPromptByPromptId} from "../../utils/models/Prompt";
import {selectProfileByProfileEmail, selectWholeProfileByProfileId} from "../../utils/models/Profile";

    export const signUpValidator: Schema = {
    profileUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'ProfileUsername must be between seven and thirty two characters',
            options: {min: 1, max: 32 }
        },
        custom: { 'Profile username already used',
            options: async (value: string, {req}) => {
                try {
                    const profile = await selectWholeProfileByProfileId(value)

                    if (profile?.profileUsername !== 'username') {
                        throw new Error('Invalid username')
                    }
                    req.body.profile = profile.profileUsername
                    return true;
                } catch (error) {
                    throw new Error('Invalid username');
                }
            },
        }
    },
        profilePhotoUrl: {
        optional: true,
            isURL: {
            errorMessage: 'profile photo is malformed, please upload a new image',
            }
        },
        profileEmail: {
            isEmail: {
                errorMessage: 'Please provide a valid email'
            },
            trim: true,
        },
        profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least 8 characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
        },
    }