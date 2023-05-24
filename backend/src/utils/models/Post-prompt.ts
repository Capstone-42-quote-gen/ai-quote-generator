import {sql} from "../database.utils"

export interface PostPromptPrompt {
    postPromptPromptId: string | null
}
export interface PostPromptPost {
    postPromptPostId: string | null,
}

export async function selectPostPromptByPostIdAndPromptId (postPromptPostId: string, postPromptPromptId: string): Promise<PostPromptPrompt | null> {
    const result = await sql<PostPromptPrompt[]>`SELECT post_prompt_post_id, post_prompt_prompt_id FROM post_prompt WHERE post_prompt_post_id = ${postPromptPostId} AND post_prompt_prompt_id = ${postPromptPromptId}`
    return result.length === 1 ? result[0] : null
}


export async function selectPostPromptsByPostId (postPromptPostId: string): Promise<PostPromptPost[]> {
    const result = await sql<PostPromptPost[]>`SELECT post_prompt_post_id, post_prompt_prompt_id FROM post_prompt WHERE post_prompt_post_id = ${postPromptPostId}`
    return result
}

export async function selectPostPromptsByPromptId (postPromptPromptId: string): Promise<PostPromptPrompt[]> {
    const result = await sql<PostPromptPrompt[]>`SELECT post_prompt_post_id, post_prompt_prompt_id FROM post_prompt WHERE post_prompt_prompt_id = ${postPromptPromptId}`
    return result
}

export async function insertPostPromptPrompt(postPromptPrompt: PostPromptPrompt): Promise<string> {
    const {postPromptPromptId} = postPromptPrompt;
    await sql`INSERT INTO post_prompt (post_prompt_post_id, post_prompt_prompt_id) VALUES (gen_random_uuid(), ${postPromptPromptId})`;

    return "PostPrompt inserted successfully";
}