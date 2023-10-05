const express = require("express");
const userRouter = express.Router();

// Configuración de multer
const upload = require("../config/multer.config");

// Ruta para manejar el registro de usuarios

//importando controlador
const usersController = require("../controllers/userController");

userRouter.get("/login", usersController.loginView);
userRouter.post("/login", usersController.login);
userRouter.get("/register", usersController.registerView);
userRouter.post("/register", upload.single("image"), usersController.register);
userRouter.get("/misTickets", usersController.misTickets);
userRouter.get("/miCarrito", usersController.miCarrito);

module.exports = userRouter;
