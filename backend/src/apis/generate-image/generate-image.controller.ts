import {Request, Response} from "express";
import { generateImage } from "../../utils/unsplash.utils";

export async function generateImageController(request: Request, response: Response) {

    try {
        const { topicValue } = request.body;
        console.log(topicValue)
        const completion = await generateImage(topicValue);
        return response.json({ status: 200, message: "success", data: completion });
    } catch (error) {
        response.json({ status: 500, message: 'Error generating image', data: null });
    }
}