import { sql } from '../database.utils'

export interface Vote {
    voteProfileId: string | null
    votePostId: string | null
    voteDate: Date | null
    voteValue: string | null
    }

    export async function insertVote (vote: Vote): Promise<string> {
    const {voteProfileId, votePostId, voteValue} = vote
        await sql `INSERT INTO  vote (vote_post_id, vote_profile_id, vote_date, vote_value) VALUES(${voteProfileId}, ${votePostId}, NOW(), ${voteValue})`
        return 'Vote created successfully'
    }

    export async function deleteVote(vote: Vote): Promise<string> {
    const {voteProfileId, votePostId }  = vote
        await sql `DELETE FROM vote WHERE vote_profile_id = ${voteProfileId} AND vote_post_id = ${votePostId}`
        return 'Vote deleted successfully'
    }

    export async function selectVoteByVoteId (vote: Vote): Promise<Vote|null> {
    const {voteProfileId, votePostId, voteValue} = vote
       const result = await sql<Vote[]>`SELECT vote_profile_id, vote_post_id, vote_date, vote_value FROM "vote" WHERE vote_profile_id = ${voteProfileId} AND vote_post_id = ${votePostId} AND vote_value =${voteValue}`
        return result?.length === 1 ? result[0] : null
    }

    export async function selectVotesByVotePostId (votePostId: string): Promise<Vote[]> {
    return <Vote[]> await sql `SELECT vote_profile_id, vote_post_id, vote_date, vote_value FROM "vote" WHERE vote_post_id = ${votePostId}`
    }






