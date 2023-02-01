import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { getUserController, getAllUser } = allControllers


//all router operation
router.post('/', getUserController)
router.get('/getalluser', getAllUser)


export default router