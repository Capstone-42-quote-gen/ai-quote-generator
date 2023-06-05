import {Schema} from "express-validator";
import {selectPromptByPromptId} from "../../utils/models/Prompt";

export const generatePromptValidator: Schema = {
    topic: {
        isUUID: {
            errorMessage: 'please provide a valid promptId for topic'
        },
       custom: {
            errorMessage: 'Invalid topic',
            options: async (value: string, {req}) => {
                // req.body.topicValue = "whatever"
                try {
                    const prompt = await selectPromptByPromptId(value)

                    if (prompt?.promptType !== 'topic') {
                        throw new Error('Invalid topic')
                    }
                    req.body.topicValue = prompt.promptValue
                    return true;
                } catch (error) {
                    throw new Error('Invalid topic');
                }
            },
        },
    },
    voice: {
        isUUID: {
            errorMessage: 'Please provide a valid promptID for voice',
        },
        custom: {
            errorMessage: 'Invalid voice',
            options: async (value: string, {req}) => {
                // req.body.topicValue = "whatever"
                try {
                    const prompt = await selectPromptByPromptId(value)

                    if (prompt?.promptType !== 'voice') {
                        throw new Error('Invalid voice')
                    }
                    req.body.voiceValue = prompt.promptValue
                    return true
                } catch (error) {
                    throw new Error('Invalid voice')
                }
            },
        },
    },
}