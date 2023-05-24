import { Router } from 'express'
import {
    getAllPostsController,
    getPostByPostIdController,
    getPostsByPostProfileIdController,
    postPost
} from './post.controller'
import { asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import { check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {postValidator} from "./post.validator";

const router = Router()
router.route('/:postId').get(asyncValidatorController([
check('postId', 'please provide a valid postId').isUUID()
]),getPostByPostIdController)

router.route('/postProfileId/:postProfileId').get(asyncValidatorController([
    check('postProfileId','please provide a valid postProfileId').isUUID()
]), getPostsByPostProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get(getAllPostsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((postValidator))), postPost)

export default router