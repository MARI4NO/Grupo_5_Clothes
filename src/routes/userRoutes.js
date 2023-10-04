const express = require("express");
const userRouter = express.Router();

// Configuración de multer
const upload = require("../config/multer.config");

//importando controlador
const usersController = require("../controllers/userController");

userRouter.get("/login", usersController.login);
userRouter.get("/register", usersController.register);
userRouter.get("/misTickets", usersController.misTickets);
userRouter.get("/miCarrito", usersController.miCarrito);

module.exports = userRouter;
