import {Router} from "express";
import {checkSchema, param} from "express-validator";
import {signUpProfileController} from "./sign-up.controller";
import {signUpValidator} from "./sign-up.validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {activationController} from "./activation.controller";


const router: Router = Router()

router.route('/')
    .post
    (asyncValidatorController(checkSchema(signUpValidator)),
        signUpProfileController
    )

router.route('activation/:activation')
    .get(
        asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
        activationController
    )
export default router