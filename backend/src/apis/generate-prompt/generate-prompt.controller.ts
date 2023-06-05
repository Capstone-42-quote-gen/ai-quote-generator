import {Request, Response} from "express";
import { generatePrompt } from "../../utils/openai.utils";

export async function generatePromptController(request: Request, response: Response) {

    try {
        const { topicValue, voiceValue } = request.body;
        console.log(topicValue, voiceValue)
        return response.json({ status: 200, message: 'success',data:{} })
        const completion = await generatePrompt(topicValue, voiceValue);
        response.json({ status: 200, message: null, data: completion });
    } catch (error) {
        response.json({ status: 500, message: 'Error generating prompt', data: null });
    }
}