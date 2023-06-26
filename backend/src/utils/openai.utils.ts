import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generatePrompt(topic: string, voice: string): Promise<string> {
    const prompt =
`From now on you are a de-motivational comedian and the responses are your thoughts.
You are very sarcastic and you must make the quote funny.

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
        max_tokens: 50,
    });

    const choice = completion.data.choices[0];
    const generatedQuote = choice?.text?.trim();

    return generatedQuote || "";
} catch (error) {
    throw new Error("Failed to generate prompt");
}
}


// METHOD USING CHAT COMPLETIONS
// try {
//     const chatCompletion = await openai.createChatCompletion({
//         model: 'gpt-3.5-turbo',
//         messages: [{role: "user", content: prompt}],
//         temperature: 1.2,
//         max_tokens: 40,
//     });
//
//     // Check if choices array exists and has at least one element
//     if (chatCompletion.data.choices && chatCompletion.data.choices.length > 0) {
//         const firstChoice = chatCompletion.data.choices[0];
//
//         // Check if the 'message' property exists in the choice
//         if (firstChoice && firstChoice.message) {
//             const messageContent = firstChoice.message.content;
//
//             console.log(messageContent);
//             return messageContent;
//         }
//     }
//
//     console.error("No choices or messages found in the response.");
//     return null;
// } catch (error) {
//     console.error("Failed to generate prompt. Error:", error);
//     return null;
// }
// }
