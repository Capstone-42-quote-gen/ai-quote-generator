import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {generatePrompt} from "./openai.controller";

const router = Router();
// Other routes...

router.route('/generate-prompt')
    .post(
        asyncValidatorController([
            check('topic').exists().withMessage('Topic is required'),
            check('voice').exists().withMessage('Voice is required'),
        ]),
        async (request: Request, response: Response) => {
            const { topic, voice } = request.body;

            try {
                const completion = await generatePrompt(topic, voice);
                response.json({ status: 200, message: null, data: completion });
            } catch (error) {
                response.status(500).json({ status: 500, message: 'Error generating prompt', data: null });
            }
        }
    );

export default router