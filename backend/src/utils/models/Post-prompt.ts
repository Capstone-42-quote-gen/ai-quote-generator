import {sql} from "../database.utils"

export interface PostPrompt {
    postPromptPostId: string
    postPromptPromptId: string
}

export async function selectPostPromptByPostIdAndPromptId (postPromptPostId: string, postPromptPromptId: string): Promise<PostPrompt | null> {
    const result = await sql<PostPrompt[]>`SELECT post_prompt_post_id, post_prompt_prompt_id FROM post_prompt WHERE post_prompt_post_id = ${postPromptPostId} AND post_prompt_prompt_id = ${postPromptPromptId}`
    return result.length === 1 ? result[0] : null
}


export async function selectPostPromptsByPostId (postPromptPostId: string): Promise<PostPrompt[]> {
    const result = await sql<PostPrompt[]>`SELECT post_prompt_post_id, post_prompt_prompt_id FROM post_prompt WHERE post_prompt_post_id = ${postPromptPostId}`
    return result
}

export async function selectPostPromptsByPromptId (postPromptPromptId: string): Promise<PostPrompt[]> {
    const result = await sql<PostPrompt[]>`SELECT post_prompt_post_id, post_prompt_prompt_id FROM post_prompt WHERE post_prompt_prompt_id = ${postPromptPromptId}`
    return result
}

export async function insertPostPromptPrompt(postPromptPrompt: PostPrompt): Promise<string> {
    const {postPromptPostId, postPromptPromptId } = postPromptPrompt;
    await sql`INSERT INTO post_prompt (post_prompt_post_id, post_prompt_prompt_id) VALUES (${postPromptPostId}, ${postPromptPromptId})`;

    return "PostPrompt inserted successfully";
}