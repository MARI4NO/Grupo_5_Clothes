const express = require("express");
const userRouter = express.Router();
const { uploadUser } = require("../config/multer.config");
const usersController = require("../controllers/userController");

userRouter.get("/login", usersController.loginView);
userRouter.post("/login", usersController.login);
userRouter.get("/register", usersController.registerView);
userRouter.post(
    "/register",
    uploadUser.single("image"),
    usersController.register
);
userRouter.get("/misTickets", usersController.misTickets);
userRouter.get("/miCarrito", usersController.miCarrito);

module.exports = userRouter;
