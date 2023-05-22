
import { Router } from 'express'
import {
    getAllPrompts,
    getPromptsByPromptId,
    Prompts
} from './prompt.controller'

promptRoute.route('/')
    .get(getAllPromptsController)
promptRoute.route('/:promptId')
    .get(

    )



