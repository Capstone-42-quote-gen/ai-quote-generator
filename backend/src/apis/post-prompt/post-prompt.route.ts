import {Router} from "express"
import {
    getPostPromptIdByPostIdAndPromptIdController,
    getPostPromptsByPostIdController,
    getPostPromptsByPromptIdController,
    postPostPromptPromptController
} from "./post-prompt.controller"
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const postPromptRoute = Router()

postPromptRoute.route('/postId/:postId/promptId/:promptId')
    .get (asyncValidatorController([
        check ('postId', 'please provide a valid postId').isUUID(), check ('promptId', 'please provide a valid promptId').isUUID()
    ]),getPostPromptIdByPostIdAndPromptIdController)

postPromptRoute.route('/')
    .post (asyncValidatorController([
        check ('postId', 'please provide a valid postId').isUUID(), check ('promptId', 'please provide a valid promptId').isUUID()
    ]),postPostPromptPromptController)


postPromptRoute.route('/postId/:PostId')
    .get (asyncValidatorController([
        check ('postId', 'please provide a valid postId').isUUID()
        ]),getPostPromptsByPostIdController)

postPromptRoute.route('/promptId/:PromptId')
    .get (asyncValidatorController([
        check ('promptId', 'please provide a valid promptId').isUUID()
    ]),getPostPromptsByPromptIdController)