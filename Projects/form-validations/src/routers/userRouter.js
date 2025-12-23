import { Router } from "express";
import {
  userListGet,
  userCreateGet,
  userCreatePost,
  userDeletePost,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", userListGet);
userRouter.get("/create", userCreateGet);
userRouter.post("/create", userCreatePost);
// userRouter.get("/:id/update");
// userRouter.post("/:id/update");
userRouter.post("/:id/delete", userDeletePost);

export default userRouter;
