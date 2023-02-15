import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { registerSeller } = allControllers


//all router operation
router.post('/',registerSeller)


export default router