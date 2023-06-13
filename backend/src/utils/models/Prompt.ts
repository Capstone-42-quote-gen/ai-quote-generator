import {sql} from '../database.utils'

export interface Prompt {
    promptId: string | null
    promptType: string
    promptValue: string
}

export async function selectAllPrompts(): Promise<Prompt[]> {
    return sql<Prompt[]>`SELECT prompt_id, prompt_type, prompt_value FROM prompt`
}

export async function selectPromptByPromptId(promptId: string): Promise<Prompt | null> {
    const result = await sql<Prompt[]>`SELECT prompt_id, prompt_type, prompt_value FROM prompt WHERE prompt_id = ${promptId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectPromptsByPostId(postId: string): Promise<Prompt[]> {
    const result = await sql<Prompt[]>`SELECT prompt_id, prompt_type, prompt_value FROM prompt INNER JOIN post_prompt on prompt.prompt_id  = post_prompt.post_prompt_prompt_id WHERE post_prompt.post_prompt_post_id = ${postId}`;
    return result
}