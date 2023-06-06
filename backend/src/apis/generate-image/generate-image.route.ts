import { Router } from 'express';
import { checkSchema} from 'express-validator';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {generateImageController} from "./generate-image.controller";
import {generateImageValidator} from "./generate-image.validator";


export const GenerateImageRoute = Router();

GenerateImageRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(generateImageValidator)),
        generateImageController
    );