import {Schema} from "express-validator";

export const signInValidator: Schema = {
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        // normalizeEmail: true,
        trim: true
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