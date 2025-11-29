import { Router } from "express";
import {
  getAllUsers,
  getUsersById,
  register,
  login,
} from "../controllers/userController/userController";
import userValidate from "../middlewares/userValidateMiddleware";
import credentialValidate from "../middlewares/credentialValidateMiddleware";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUsersById);
userRouter.post("/register", userValidate, register);
userRouter.post("/login", credentialValidate, login);

export default userRouter;
