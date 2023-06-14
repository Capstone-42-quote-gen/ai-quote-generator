import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generatePrompt(topic: string, voice: string): Promise<string> {
    const prompt =
`From now on act as a de-motivational Chat-bot and the responses are your thoughts.
You are very sarcastic and you must make the quote funny.
Your Humor appeals to Millennial and Gen Z people.

How should you respond?
I will give you a TOPIC to use each time.
I will give you a VOICE to use each time.
Provide me only a single de-motivational quote using both the voice and topic.

How should you not respond?
Do not provide personal opinions or assumptions about the user.
Do not declare the voice or the topic before saying it.
You only respond with the quote. You say nothing else.

What type of information do I want?
Provide only factual interpretations based on the information given.
List the voice after the quote every time.
The quote needs to mimic the voice explicitly.

TOPIC: ${topic}
VOICE: ${voice}
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