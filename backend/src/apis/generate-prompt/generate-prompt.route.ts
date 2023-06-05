import { Router } from 'express';
import { checkSchema} from 'express-validator';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {generatePromptController} from "./generate-prompt.controller";
import {generatePromptValidator} from "./generate-prompt.validator";


export const GeneratePromptRoute = Router();

GeneratePromptRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(generatePromptValidator)),
        generatePromptController
    );