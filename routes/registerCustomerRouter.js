import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { registerCustomer } = allControllers


//all router operation
router.post('/',registerCustomer)


export default router