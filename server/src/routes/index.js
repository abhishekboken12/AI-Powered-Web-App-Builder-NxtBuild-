import {Router} from 'express'

import healthRoute from './health.routes.js'
import authRoutes from './auth.routes.js'

const router = Router()

router.use('/health', healthRoute)
router.use('/auth', authRoutes)

export default router