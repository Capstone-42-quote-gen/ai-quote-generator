import { Schema } from 'express-validator'

export const postValidator: Schema = {
    postProfileId: {
        isUUID: {
            errorMessage: "please provide a valid postProfileId"
        }
    },
    postCreationTime: {
        toDate: true
    },
    postPhotoUrl: {
        isLength: {
            errorMessage: 'Url cannot be longer than 2000 characters',
            options: {max: 2000}
        },
        trim: true,
    },
    postQuote: {
        isLength: {
            errorMessage: 'Quote cannot be longer than 512 characters',
            options: {max: 512}
        },
        trim: true,
        escape: true,
    },
    postPhotographerName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Unsplash Photographer Name must be less than 128 characters',
            options: {max: 128}
        }
    },
    postPhotographerUrl: {
        isLength: {
            errorMessage: 'Unsplash Photographer Url cannot be longer than 2000 characters',
            options: {max: 2000}
        },
        trim: true,
        escape: true
    },
}