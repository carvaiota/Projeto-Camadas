import  {Router} from "express"
import UserController from "../controllers/userController.js"
import userController from "../controllers/userController.js"
import authMiddleware from "../middlewares/authMiddlewares.js"
import authAdminMiddleware from "../middlewares/authAdminMiddlewares.js"


const userRoutes = Router ()

userRoutes.get("/", UserController.select)
userRoutes.post("/", userController.create)
userRoutes.delete("/:id", authMiddleware, authAdminMiddleware, userController.delete)
userRoutes.put("/:id", userController.update)



export default userRoutes