import {Router} from 'express'
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {generatePromptController, postGeneratePrompt} from "./openai.controller";

const router = Router()
router.route('/create-prompt')
    .get(generatePromptController)
        ), postGeneratePrompt())
app.get('/generate-prompt', async (request, response) => {
    const { topic, voice } = request.query;

    try {
        const completion = await generatePrompt(topic, voice);
        response.send(completion);
    } catch (error) {
        response.status(500).send('Error generating prompt');
    }
});