import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generatePrompt(topic: string, voice: string): Promise<string | null> {

    const prompt = `As an AI adopting the persona of a quick-witted comedian known for subtly de-motivating humor, your task is to come up with a witty, amusing quote within 160 characters that is centered on a given topic. Remember to make the topic the main focus of the humor without openly referencing it or the voice. Use the voice to subtly influence the delivery style of the quote. Refrain from providing personal opinions about the user.

Ensure the quote is well thought-out and the humor is subtle and clever. The quote should follow this format: "Quote text" - Voice.

TOPIC: ${topic}
VOICE: ${voice}
`;



        try {
            const chatCompletion = await openai.createChatCompletion({
                model: 'gpt-4',
                messages: [{ role: 'user', content: prompt }],
                temperature: 1.2,
                max_tokens: 40
            });


            if (chatCompletion.data.choices.length > 0) {
                const choice = chatCompletion.data.choices[0];
                return choice.message?.content ?? null;
            }

            return null;

        } catch (error) {
            console.error('Failed to generate prompt', error);
            return null;
        }

    }


// Older completion method from older model

// try {
//
//     const completion = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: prompt,
//         temperature: 1.2,
//         max_tokens: 50,
//     });
//     console.log(completion)
//
//
//
//
//     const choice = completion.data.choices[0];
//     const generatedQuote = choice?.text?.trim();
//
//     return generatedQuote || "";
// } catch (error) {
//     throw new Error("Failed to generate prompt");
// }
// }