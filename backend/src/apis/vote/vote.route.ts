import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {getVotesByVotePostId, toggleVoteController} from "./vote.controller";

export const VoteRoute: Router = Router ()


VoteRoute.route('/')
.post(isLoggedIn, asyncValidatorController([
    check('votePostId', 'Please provide a valid votePostID').isUUID()
]), toggleVoteController)
VoteRoute.route('/votePostId/:votePostId')
.get(asyncValidatorController([
    check('votePostId', 'Please provide a valid votePostID').isUUID()
    ]), getVotesByVotePostId)

// TODO: Do we need a route to lookup all the posts that I voted on? So if you are on your profile.
// router.route('/')
//     .post(isLoggedIn, toggleVoteController)
//     router.route('/voteProfileId/:voteProfileId')
//     .get(asyncValidatorController([
//         check('voteProfileId', 'Please provide a valid voteProfileID').isUUID()
//     ]), getVotesByVotePostId)




