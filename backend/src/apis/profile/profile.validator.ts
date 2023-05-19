import { Schema } from "express-validator";

export const profileValidator: Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'Please provide valid profileID'
        }
    },

    profileUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileUsername must be between 7 and 64 characters',
            options: {min: 1, max: 64}
        }
    },

    profilePhotoUrl: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: 'profile photo url is malformed. Please upload a new image'
        }
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    }
}

