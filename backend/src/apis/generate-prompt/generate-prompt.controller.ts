import {Request, Response} from "express";

export async function generatePromptController(request: Request, response: Response) {

    try {
        const { topicValue, voiceValue } = request.body;
        console.log(topicValue, voiceValue)
        return response.json({ status: 200, message: 'success',data:{} })
        // const completion = await generatedPrompt(topic, voice);
        // response.json({ status: 200, message: null, data: completion });
    } catch (error) {
        response.json({ status: 500, message: 'Error generating prompt', data: null });
    }
}