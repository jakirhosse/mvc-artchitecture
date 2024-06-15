const { Router } = require("express");
const userModel = require("../model/userModel");
const {
  userController,
  getuserController,
  getSingleUserController,
  updateSingleUserController,
  deleteUser
} = require("../controller/userController");

const userRouter = Router();

userRouter.post("/auth", userController);
userRouter.get("/get-users", getuserController);
userRouter.get("/get-users/:id", getSingleUserController);
userRouter.put("/get-users/:id",updateSingleUserController);
userRouter.delete("/get-users/:id", deleteUser)
module.exports = userRouter;
