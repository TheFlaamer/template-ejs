import express from "express"
const router = express.Router()
import User from '../controller/UserController'
const UserController = new User()

router.post("/", UserController.create)
router.get("/", UserController.getById)
router.get("/", UserController.getAll)
router.put("/", UserController.update)
router.delete("/", UserController.delete)


export default router