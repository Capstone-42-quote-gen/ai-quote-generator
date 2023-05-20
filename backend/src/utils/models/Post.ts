import { sql } from '../database.utils'

export interface Post {
    postId: string|null
    postProfileId: string
    postPhotoUrl: string
    postQuote: string
    postCreationTime: Date|null
    // postPromptPromptId: string
    // postPromptPostId: string
}

export async function insertPost()

export async function selectAllPosts(): Promise<Post[]> {
    return <post[]> await sql`SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time FROM post ORDER BY post_creation_time DESC`
}

export async function selectPostByPostId(postId: string): Promise<Post | null > {
    const result = <Post[]> await sql`SELECT post_id, post_profile_id, post_photo_url, post_quote, post_creation_time FROM post WHERE post_id = ${postId}`
    return result ?.length === 1 ? result[0] : null
}

export async function selectPostsByPostProfileId()

export async function getPostByPostId()

export async function getPostsByPostProfileId()