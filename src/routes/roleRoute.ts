import { Router } from 'express'
import roleController from '~/controllers/roleController'

const { getAll } = roleController

const router = Router()

router.get('/', getAll)

export default router
