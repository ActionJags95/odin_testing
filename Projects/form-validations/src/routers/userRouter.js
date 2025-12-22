import { Router } from "express";
import { userListGet, userCreateGet } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", userListGet);
userRouter.get("/create", userCreateGet);
// userRouter.post("/create");
// userRouter.get("/:id/update");
// userRouter.post("/:id/update");
// userRouter.post("/:id/delete");

export default userRouter;
