import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { login } = allControllers


//all router operation
router.post('/',login)


export default router