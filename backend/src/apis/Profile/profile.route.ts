/**

import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";


export const ProfileRoute: Router = Router ()
ProfileRoute.route('/')
.post(putProfileController)

ProfileRoute.route('/:profileId')
.get(
    asyncValidatorController([
        check ('profileId', 'please provide a valid profileId').isUUID()
    ])
    , getProfileById
)
.put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)

 **/