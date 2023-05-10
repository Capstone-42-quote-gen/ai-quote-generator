import { Router } from 'express'
import { indexController } from './index.controller'

export const indexRoute = Router()

indexRoute.route('/')
    .get(indexController)