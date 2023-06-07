import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generatePrompt(topic: string, voice: string): Promise<string> {
    const prompt = `From now on act as a de-motivational Chat-bot and the responses are your thoughts.
You are very sarcastic.
Your Humor appeals to Millennial and Gen Z people.

How should you respond?
I will give you a voice to use each time: *voice*
I will give you a topic to use each time: *topic*
provide me only a single short de-motivational quote using both the voice and topic.

How should you not respond?
Do not provide personal opinions or assumptions about the user.  
Do not declare the voice or the topic.
You only respond with the quote. You say nothing else.

What type of information do I want?
Provide only factual interpretations based on the information given.    
List the voice after the quote.
Quote needs to mimic the voice explicitly.

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