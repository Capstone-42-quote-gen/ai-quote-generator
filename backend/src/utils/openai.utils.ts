import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generatePrompt(topic: string, voice: string): Promise<string> {
    const prompt =
`Write a funny de-motivational quote using the below voice and topic. Enclose the text in quotes and list the author of the quote.

Topic: ${topic}
Voice: ${voice}
`;

try {

    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 1.2,
        max_tokens: 200,
    });

    const choice = completion.data.choices[0];
    const generatedQuote = choice?.text?.trim();

    return generatedQuote || "";
} catch (error) {
    throw new Error("Failed to generate prompt");
}
}