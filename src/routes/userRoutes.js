import  {Router} from "express"
import UserController from "../controllers/userController.js"
import userController from "../controllers/userController.js"


const userRoutes = Router ()

userRoutes.get("/", UserController.select)
userRoutes.post("/", userController.create)
userRoutes.delete("/:id", userController.delete)



export default userRoutes