import { sql } from '../database.utils'
import {Prompt} from "./Prompt";
// import {postPost} from "../../apis/post/post.controller";

export interface Post {
    postId: string|null
    postProfileId: string
    postPhotoUrl: string
    postQuote: string
    postCreationTime: Date|null
    postPhotographerName: string
    postPhotographerUrl: string
}

export async function insertPost(post: Post): Promise<string> {
    const { postId, postProfileId, postPhotoUrl, postQuote, postPhotographerName, postPhotographerUrl } = post
    await sql`INSERT INTO post (post_id, post_profile_id, post_photo_url, post_quote, post_creation_time, post_photographer_name, post_photographer_url) VALUES (${postId}, ${postProfileId}, ${postPhotoUrl}, ${postQuote}, NOW(), ${postPhotographerName}, ${postPhotographerUrl})`
    return 'post created successfully'
}

export async function selectAllPosts(): Promise<Post []> {
    return sql<Post[]> `SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time,post_photographer_name, post_photographer_url  FROM post ORDER BY post_creation_time DESC`;
}

export async function selectPostByPostId(postId: string): Promise<Post | null > {
    const result = await sql<Post[]> `SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time, post_photographer_name, post_photographer_url FROM post WHERE post_id = ${postId}`
    return result ?.length === 1 ? result[0] : null
}

export async function selectPostsByPostProfileId(postProfileId: string): Promise<Post[]> {
    return <Post[]> await sql`SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time, post_photographer_name, post_photographer_url FROM post WHERE post_profile_id = ${postProfileId}`
}

export async function selectPostsByPromptId(promptId: string): Promise<Post[]> {
    const result = await sql<Post[]>`SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time, post_photographer_name, post_photographer_url FROM post INNER JOIN post_prompt on post.post_id = post_prompt.post_prompt_post_id  WHERE post_prompt.post_prompt_prompt_id = ${promptId}`;
    return result
}