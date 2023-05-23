import {Router} from 'express'
import {
    getAllPromptsController,
    getPromptsByPromptId
} from './prompt.controller'
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";


export const PromptRoute = Router()
PromptRoute.route('/')
    .get(getAllPromptsController)
PromptRoute.route('/:promptId')
    .get(
        asyncValidatorController(
            [check('promptId', 'Please provide a valid promptId').isUUID()]
        ), getPromptsByPromptId
    )