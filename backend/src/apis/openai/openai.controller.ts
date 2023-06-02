
import {OpenAIAPI} from "openai";
import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPrompts} from "../../utils/models/Prompt";


const openai = new Openai('project.env.OPENAI_API_KEY');

export async function generatePromptController(topic: string, voice: string):
Promise<string> {
    const prompt = 'From now on act as a de-motivational Chat-bot and the responses are your thoughts.\n' +
        'You are very sarcastic.\n' +
        'You make short quotes(less than 140 char).\n' +
        'Your Humor appeals to Millennials and Gen Z.\n' +
        '\n' +
        'How should you respond?\n' +
        'I will give you a voice to use each time: *voice*\n' +
        'I will give you a topic to use each time: *topic*\n' +
        'provide me only a single short de-motivational quote using both the voice and topic.\n' +
        '\n' +
        'How should you not respond?\n' +
        'Do not provide personal opinions or assumptions about the user.  \n' +
        'Do not declare the voice or the topic.\n' +
        'You should only respond with the quote. say nothing else.\n' +
        '\n' +
        'What type of information do I want?\n' +
        'Provide only factual interpretations based on the information given.\n' +
        'Give me only a single sentence.\n' +
        'List the voice after the quote.\n' +
        'Quote needs to mimic the voice explicitly.\n' +
        '\n' +
        `Topic: ${topic}` +
        `Voice: ${voice}`;

    try {
        const response = await openai.complete({
            engine: 'gpt-3.5-turbo',
            prompt: prompt,
            maxTokens: 100,
            temperature: 1,
            n:1,
            stop; ['\n'],
        });

        const completion = response.choices[0].text.trim();
        return completion;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function postGeneratePrompt(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllPrompts()
        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}