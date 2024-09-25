import { Router } from 'express'
import produtoRoute from './produto.route.js'

const router = Router()

router.use('/produtos', produtoRoute)

export default router