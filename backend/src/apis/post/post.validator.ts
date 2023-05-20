import { Schema } from 'express-validator'

export const postValidator: Schema = {
    postProfileId: {
        isUUID: {
            errorMessage: "please provide a valid postProfileId"
        }
    },
    postPhotoUrl: {
        isLength: {
            errorMessage: 'Url cannot be longer than 256 characters',
            options: {max: 256}
        },
        trim: true,
        escape: true
    },
    postQuote: {
        isLength: {
            errorMessage: 'Quote cannot be longer than 512 characters',
            options: {max: 512}
        },
        trim: true,
        escape: true,
    },
    postCreationTime: {
        toDate: true
        }
    }