import { sql } from '../database.utils'
import {postPost} from "../../apis/post/post.controller";

export interface Post {
    postId: string|null
    postProfileId: string
    postPhotoUrl: string
    postQuote: string
    postCreationTime: Date|null
}

export async function insertPost(post: Post): Promise<string> {
    const { postProfileId, postPhotoUrl, postQuote } = post
    await sql`INSERT INTO post (post_id, post_profile_id, post_photo_url, post_quote, post_creation_time) VALUES (gen_random_uuid(), ${postProfileId}, ${postPhotoUrl}, ${postQuote}, NOW())`
    return 'post created successfully'
}

export async function selectAllPosts(): Promise<Post []> {
    return sql<Post[]> `SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time FROM post ORDER BY post_creation_time DESC`;
}

export async function selectPostByPostId(postId: string): Promise<Post | null > {
    const result = await sql<Post[]> `SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time FROM post WHERE post_id = ${postId}`
    return result ?.length === 1 ? result[0] : null
}

export async function selectPostsByPostProfileId(postProfileId: string): Promise<Post[]> {
    return <Post[]> await sql`SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time FROM post WHERE post_profile_id = ${postProfileId}`
}