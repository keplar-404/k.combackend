import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { updateProfile } = allControllers


router.post('/', updateProfile)

export default router