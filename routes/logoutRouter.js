import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { logout } = allControllers


//all router operation
router.get('/',logout)


export default router