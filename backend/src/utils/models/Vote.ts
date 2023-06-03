import { sql } from '../database.utils'

export interface Vote {
    voteProfileId: string | null
    votePostId: string | null
    voteDate: Date | null
    }

    export async function insertVote (vote: Vote): Promise<string> {
    const {voteProfileId, votePostId} = vote
        await sql `INSERT INTO  vote (vote_profile_id, vote_post_id, vote_date) VALUES(${voteProfileId}, ${votePostId}, NOW())`
        return 'Vote created successfully'
    }

    export async function deleteVote(vote: Vote): Promise<string> {
    const {voteProfileId, votePostId }  = vote
        await sql `DELETE FROM vote WHERE vote_profile_id = ${voteProfileId} AND vote_post_id = ${votePostId}`
        return 'Vote deleted successfully'
    }

    export async function selectVoteByVoteId (vote: Vote): Promise<Vote|null> {
    const {voteProfileId, votePostId} = vote
       const result = await sql<Vote[]>`SELECT vote_profile_id, vote_post_id, vote_date FROM "vote" WHERE vote_profile_id = ${voteProfileId} AND vote_post_id = ${votePostId}`
        return result?.length === 1 ? result[0] : null
    }

    export async function selectVotesByVotePostId (votePostId: string): Promise<Vote[]> {
    return <Vote[]> await sql `SELECT vote_profile_id, vote_post_id, vote_date FROM "vote" WHERE vote_post_id = ${votePostId}`
    }






