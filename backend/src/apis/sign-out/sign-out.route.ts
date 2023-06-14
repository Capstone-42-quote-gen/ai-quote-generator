import {signOutController} from "./sign-out.controller";
import {Router} from "express";

export const SignOutRoute: Router = Router()

SignOutRoute.route('/')
.get(signOutController)