import {Request, Response} from 'express'
import {
    selectAllPrompts,
    selectPromptByPromptId
} from "../../utils/models/Prompt";
import {Status} from "../../utils/interfaces/Status";

export async function getAllPromptsController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllPrompts()
        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getPromptsByPromptId(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {promptId} = request.params
        const data = await selectPromptByPromptId(promptId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}