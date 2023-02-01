import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { registerAdmin } = allControllers


//all router operation
router.post('/register',registerAdmin)


export default router