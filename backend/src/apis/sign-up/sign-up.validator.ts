import { Schema } from 'express-validator'
import {selectWholeProfileByProfileId} from "../../utils/models/Profile";

    export const signUpValidator: Schema = {
    profileUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'ProfileUsername must be between seven and thirty two characters',
            options: {min: 1, max: 32 }
        },
        custom: {
            errorMessage: 'Username already in use',
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
            custom: {
                errorMessage: 'Email already in use',
                options: async (value: string, {req}) => {
                    try {
                        const profile = await selectWholeProfileByProfileId(value)

                        if (profile?.profileEmail !== 'email') {
                            throw new Error('Invalid email')
                        }
                        req.body.profile = profile.profileEmail
                        return true;
                    } catch (error) {
                        throw new Error('Invalid email');
                    }
                },
            }
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