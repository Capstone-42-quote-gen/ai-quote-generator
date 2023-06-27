import { Router } from 'express'

import {
    getAllPostsController,
    getPostByPostIdController,
    getPostsByPostProfileIdController,
    getPostsByPromptIdController,
    postPost,
    getPostByPopularController
} from './post.controller'

import { asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import { check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {postValidator} from "./post.validator";

const postRoute = Router()
postRoute.route('/:postId').get(asyncValidatorController([
check('postId', 'please provide a valid postId').isUUID()
]),getPostByPostIdController)

postRoute.route('/popular/voteCount').get(getPostByPopularController)

postRoute.route('/:postId').get(asyncValidatorController([
check('postId', 'please provide a valid postId').isUUID()
]),getPostByPostIdController)

postRoute.route('/postProfileId/:postProfileId').get(asyncValidatorController([
    check('postProfileId','please provide a valid postProfileId').isUUID()
]), getPostsByPostProfileIdController)

postRoute.route('/promptId/:promptId').get(asyncValidatorController([
    check('promptId','please provide a valid promptId').isUUID()
]), getPostsByPromptIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
postRoute.route('/')
    .get(getAllPostsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((postValidator))), postPost)

export default postRoute