import { Router } from 'express';
import { checkSchema} from 'express-validator';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {generatePromptController} from "./generate-prompt.controller";
import {generatePromptValidator} from "./generate-prompt.validator";


export const GeneratedPromptRoute = Router();

GeneratedPromptRoute.route('/')
    .get(
        asyncValidatorController(checkSchema(generatePromptValidator)),
        generatePromptController
    );