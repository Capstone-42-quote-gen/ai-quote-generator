import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";
import {deleteVote, insertVote, selectVoteByVoteId, selectVotesByVotePostId, Vote} from "../../utils/models/Vote";


// TODO What does nextFunction do??
export async function getVotesByVotePostId(request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {votePostId} = request.params
        const data = await selectVotesByVotePostId(votePostId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function toggleVoteController(request: Request, response: Response): Promise<Response<string>> {
    try {
        const {votePostId} = request.body
        const profile = request.session.profile as Profile
        const {voteValue} = request.body
        const voteProfileId = profile.profileId as string



        const vote: Vote = {
            voteProfileId,
            votePostId,
            voteDate: null,
            voteValue
        }
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        const selectedVote: Vote | null = await selectVoteByVoteId(vote)
        if (selectedVote === null) {
            status.message = await insertVote(vote)
        } else {
            status.message = await deleteVote(vote)
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))

    }
}

