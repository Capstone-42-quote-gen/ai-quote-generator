import {Request, Response} from "express"
import {
    insertPostPromptPrompt,
    PostPromptPrompt,
    selectPostPromptByPostIdAndPromptId,
    selectPostPromptsByPostId,
    selectPostPromptsByPromptId
} from "../../utils/models/Post-prompt";
import {Profile} from "../../utils/models/Profile";
import {insertPost, Post} from "../../utils/models/Post";
import {Status} from "../../utils/interfaces/Status";

export async function getPostPromptIdByPostIdAndPromptIdController(request: Request, response: Response): Promise<Response> {
    try {
        const {postPromptPostId, postPromptPromptId} = request.params
        const data = await selectPostPromptByPostIdAndPromptId(postPromptPostId, postPromptPromptId)
        return response.json({ status: 200, message: null, data})
    } catch (error: any) {
        return response.json({status: 500, message: 'internal server error', data: null})
    }
}

export async function getPostPromptsByPostIdController(request: Request, response: Response): Promise<Response> {
    try {
        const {postPromptPostId} = request.params
        const data = await selectPostPromptsByPostId(postPromptPostId)
        return response.json({
            status: 200,
            message: null,
            data
        })
    }catch (error) {
        return response.json({ status: 500, message: 'internal server error', data: null})
    }
}

export async function getPostPromptsByPromptIdController(request: Request, response: Response): Promise<Response> {
    try {
        const {postPromptPromptId} = request.params
        const data = await selectPostPromptsByPromptId(postPromptPromptId)
        return response.json({
            status: 200,
            message: null,
            data
        })
    }catch (error) {
        return response.json({ status: 500, message: 'internal server error', data: null})
    }
}
export async function postPostPromptPromptController(request: Request, response: Response): Promise<Response> {
    try {
        const { postPromptPrompt } = request.body;
        const postPrompt: PostPromptPrompt = {
            postPromptPromptId: "promptIdValue"
        };

        const result = await insertPostPromptPrompt(postPrompt);

        const status: Status = {
            status: 200,
            message: result,
            data: null
        };

        return response.json(status);
    } catch (error) {
        return response.json({
            status: 500,
            message: 'Error creating post. Please try again later.',
            data: null
        });
    }
}