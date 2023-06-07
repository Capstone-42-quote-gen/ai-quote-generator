import { Request, Response} from 'express'
import {
    insertPost,
    selectAllPosts,
    selectPostByPostId,
    selectPostsByPostProfileId,
    Post
} from '../../utils/models/Post'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'

export async function getAllPostsController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const data = await selectAllPosts()
        //return the response
        const status: Status = { status:200, message: null, data}
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPostsByPostProfileIdController (request: Request, response: Response): Promise<Response<Status>>{
    try {
     const { postProfileId } = request.params
        const data = await selectPostsByPostProfileId(postProfileId)
        return response.json({ status: 200, message: null, data})
    } catch (error){
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPostByPostIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { postId } = request.params
        const data = await selectPostByPostId(postId)
        return response.json({ status: 200, message: null, data})
    } catch (error) {
        console.log(error)
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}

export async function postPost (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { postPhotoUrl, postQuote,  postPhotographerName, postPhotographerUrl } = request.body
        const profile: Profile = request.session.profile as Profile
        const postProfileId: string = profile.profileId as string

        const post: Post = {
            postId: null,
            postProfileId,
            postPhotoUrl,
            postQuote,
            postCreationTime: null,
            postPhotographerName,
            postPhotographerUrl
        }
        const result = await insertPost(post)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    }catch (error) {
        console.log(error)
        return response.json({
            status: 500,
            message: 'error creating post try again later',
            data: null
        })
    }
}