const express = require("express");
const userAPIController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", userAPIController.list);
userRouter.get("/:id", userAPIController.detail);

module.exports = userRouter;
