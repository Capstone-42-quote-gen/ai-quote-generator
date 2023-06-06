import {Request, Response} from "express";
import { generatePrompt } from "../../utils/openai.utils";
import {generateImage} from "../../utils/unsplash.utils";


export async function generatePromptController(request: Request, response: Response) {

    try {
        const { topicValue, voiceValue } = request.body;
        console.log(topicValue, voiceValue)
        // const completion = await generatePrompt(topicValue, voiceValue);
        const completion = await generateImage(topicValue);
        console.log(completion)
        return response.json({ status: 200, message: "success", data: completion });
    } catch (error) {
        response.json({ status: 500, message: 'Error generating prompt', data: null });
    }
}

