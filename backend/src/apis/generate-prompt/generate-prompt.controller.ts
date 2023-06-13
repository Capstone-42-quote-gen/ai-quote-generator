import {Request, Response} from "express";
import { generatePrompt } from "../../utils/openai.utils";
import {generateImage} from "../../utils/unsplash.utils";


export async function generatePromptController(request: Request, response: Response) {

    try {
        const { topicValue, voiceValue } = request.body;

         const quote = await generatePrompt(topicValue, voiceValue);
        // const quote = "Like, why even bother trying to be productive when you can just binge-watch Netflix and eat snacks all day? - Valley Girl"
        const imageData = await generateImage(topicValue);

        const data = {quote, imageData}

        // console.log(data)

        return response.json({ status: 200, message: "success", data });
    } catch (error) {
        console.log(error)
        response.json({ status: 500, message: 'Error generating prompt', data: null });
    }
}