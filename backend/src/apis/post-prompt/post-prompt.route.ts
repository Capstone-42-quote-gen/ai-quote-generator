import {Router} from "express"
import {
    getPostPromptIdByPostIdAndPromptIdController,
    getPostPromptsByPostIdController,
    getPostPromptsByPromptIdController,
    postPostPrompt
} from "./post-prompt.controller"
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const PostPromptRoute = Router()

PostPromptRoute.route('/postId/:postPromptPostId/promptId/:postPromptPromptId')
    .get (asyncValidatorController([
        check ('postPromptPostId', 'please provide a valid postId').isUUID(), check ('postPromptPromptId', 'please provide a valid promptId').isUUID()
    ]),getPostPromptIdByPostIdAndPromptIdController)

PostPromptRoute.route('/')
    .post (asyncValidatorController([
        check ('postPromptPostId', 'please provide a valid postId').isUUID(), check ('postPromptPromptId', 'please provide a valid promptId').isUUID()
    ]),postPostPrompt)


PostPromptRoute.route('/postId/:postPromptPostId')
    .get (asyncValidatorController([
        check ('postPromptPostId', 'please provide a valid postId').isUUID()
        ]),getPostPromptsByPostIdController)

PostPromptRoute.route('/promptId/:postPromptPromptId')
    .get (asyncValidatorController([
        check ('postPromptPromptId', 'please provide a valid promptId').isUUID()
    ]),getPostPromptsByPromptIdController)