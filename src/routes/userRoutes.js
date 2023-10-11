const express = require("express");
const userRouter = express.Router();
const { uploadUser } = require("../config/multer.config");
const usersController = require("../controllers/userController");
const log  = require("../config/logMiddelWare")
const guest = require("../config/guestMiddelWare")
userRouter.get("/login",guest, usersController.loginView);
userRouter.post("/login", usersController.login);
userRouter.get("/register",guest, usersController.registerView);
userRouter.post(
    "/register",
    uploadUser.single("image"),
    usersController.register
);
userRouter.get("/misTickets",log,usersController.misTickets);
userRouter.get("/miCarrito",log, usersController.miCarrito);

module.exports = userRouter;
