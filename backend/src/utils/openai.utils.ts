// Create an instance of the OpenAI API client
import {} from "openai-api"
import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generatedPrompt(topic: string, voice: string): Promise<string> {
    // Define your prompt generation logic here using the OpenAI API
    const prompt = `From now on act as a de-motivational Chat-bot and the responses are your thoughts.
You are very sarcastic.
Your Humor appeals to Millennials and Gen Z.

How should you respond?
I will give you a voice to use each time: *voice*
I will give you a topic to use each time: *topic*
provide me only a single short de-motivational quote using both the voice and topic.

How should you not respond?
Do not provide personal opinions or assumptions about the user.  
Do not declare the voice or the topic.
You should only respond with the quote. say nothing else.

What type of information do I want?
Provide only factual interpretations based on the information given.
Give me only a single sentence.
List the voice after the quote.
Quote needs to mimic the voice explicitly.

Topic: ${topic}
Voice: ${voice}
`;

    try {
        // Make the API call to OpenAI
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            temperature: 0.8, // Adjust the temperature to control the randomness of the output
            n: 1, // Specify the number of completions you want
        });
        // Extract and return the generated prompt
        const generatedPrompt = response.data.choices[0].text.trim();
        return generatedPrompt;
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error("Error generating prompt:", error);
        throw new Error("Failed to generate prompt");
    }
}