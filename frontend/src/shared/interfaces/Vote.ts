
export interface Vote extends PartialVote {
    voteDate: string;
    voteProfileId: string
}

export interface PartialVote {
    votePostId: string;
}