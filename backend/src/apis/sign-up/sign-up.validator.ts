import { Schema } from 'express-validator'

    export const signUpValidator: Schema = {
    ProfileUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'ProfileUsername must be between seven and thirty two characters',
            options: {min: 1, max: 32 }
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