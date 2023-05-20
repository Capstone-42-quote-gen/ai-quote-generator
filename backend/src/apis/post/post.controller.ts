import { Request, Response, NextFunction} from 'express'
import {
    insertPost,
    selectAllPosts,
    selectPostByPostId,
    getPostByPostId,
    getPostsByPostProfileId,
    Post
} from '../../utils/models/Post'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import {Stat} from "mailgun.js/interfaces/StatsOptions";

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

export async function getPostsByPostProfileIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
     const { postProfileId } = request.params
        const data = await selectPostbyPostProfileId(postProfileId)
        return response.json({ status: 200, message: null, data})
    } catch (error){
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPostByPostIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { PostId } = request.params
        const data = await selectPostByPostId(postId)
        return response.json({ status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}