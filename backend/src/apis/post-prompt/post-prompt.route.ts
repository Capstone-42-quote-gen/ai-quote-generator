import {Router} from "express"
import {
    getPostPromptIdByPostIdAndPromptIdController,
    getPostPromptsByPostIdController,
    getPostPromptsByPromptIdController,
    // postPostPromptController
} from "./post-prompt.controller"

export const postPromptRoute = Router()

postPromptRoute.route('/postId/:postId/promptId/:promptId')
    .get(getPostPromptIdByPostIdAndPromptIdController)
    // .post(postPostPrompt)

postPromptRoute.route('/postId/:PostId')
    .get(getPostPromptsByPostIdController)

postPromptRoute.route('/promptId/:PromptId')
    .get(getPostPromptsByPromptIdController)