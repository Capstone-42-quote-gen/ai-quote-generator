import {Router} from 'express'
import {
    getAllPromptsController,
    getPromptsByPromptId
} from './prompt.controller'
import {asyncValidatorController} from '../../utils/controllers/asyncValidator.controller';
import {check} from "express-validator";

const router = Router()
router.route('/')
    .get(getAllPromptsController)
router.route('/:promptId')
    .get(
        asyncValidatorController(
            [check('promptId', 'Please provide a valid promptId').isUUID()]
        ), getPromptsByPromptId
    )

export default router