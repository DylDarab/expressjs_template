import express from 'express'
import templateControllor from '../controller/template.controller.js'

const router = express.Router()

router.get('/',templateControllor.printHello)

export default router