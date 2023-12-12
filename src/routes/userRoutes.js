const express = require("express");
const userRouter = express.Router();
const { uploadUser } = require("../config/multer.config");
const usersController = require("../controllers/userController");
const { body, validationResult } = require("express-validator");
const log = require("../config/logMiddelWare");
const guest = require("../config/guestMiddelWare");

const db = require("../database/models");

// Validaciones para el registro de usuarios
const registerValidations = [
    body("firstName")
        .isLength({ min: 2 })
        .withMessage("El nombre debe tener al menos 2 caracteres"),
    body("lastName")
        .isLength({ min: 2 })
        .withMessage("El apellido debe tener al menos 2 caracteres"),
    body("email").isEmail().withMessage("Ingrese un correo electrónico válido"),
    body("email")
        .custom(async (value) => {
            const user = await db.Users.findOne({ where: { email: value } });

            if (!user) {
                return true;
            }
            return false;
        })
        .withMessage("Este correo electrónico ya se encuentra registrado"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos 8 caracteres"),
    /*
        body("password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )
        .withMessage(
            "Debe contener al menos una minúscula, una mayúscula, un número y un carácter especial"
        ),
    */
    body("image")
        .custom((value, { req }) => {
            const acceptedFormats = ["jpg", "jpeg", "png", "gif"];
            const fileExtension = req.file.originalname
                .split(".")
                .pop()
                .toLowerCase();
            if (acceptedFormats.includes(fileExtension)) {
                return true;
            }
            return false;
        })
        .withMessage("Formato de imagen no válido"),
];

// Función middleware para manejar la lógica común de redirección y errores
const handleValidationResultRegister = (req, res, next) => {
    const showLinks = req.session.usuario ? true : false;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorsMap = {};

            errors.array().forEach((err) => {
                errorsMap[err.path] = { msg: err.msg };
            });

            console.log(errors);

            if (req.body.lastName) {
                return res.render("users/register", {
                    showLinks,
                    errors: errorsMap,
                });
            } else {
                return res.render("users/login", {
                    showLinks,
                    errors: errorsMap,
                });
            }
        }
        next();
    } catch (error) {
        return res.render("users/login", {
            showLinks,
            errors: error,
        });
    }
};

// Rutas para el registro de usuarios
userRouter.get("/register", guest, usersController.registerView);
userRouter.post(
    "/register",
    uploadUser.single("image"),
    registerValidations,
    handleValidationResultRegister,
    usersController.register
);

// Validaciones para el inicio de sesión de usuarios
const loginValidations = [
    body("email").isEmail().withMessage("Ingrese un correo electrónico válido"),
    body("password").notEmpty().withMessage("La contraseña es obligatoria"),
];

// Ruta para el inicio de sesión de usuarios
userRouter.get("/login", guest, usersController.loginView);
userRouter.post(
    "/login",
    loginValidations,
    handleValidationResultRegister,
    usersController.login
);

userRouter.get("/misTickets", log, usersController.misTickets);
userRouter.get("/miCarrito", log, usersController.miCarrito);
userRouter.get("/myPerfil/:id", log, usersController.miPerfil);
userRouter.get("/myPerfil/:id/edit", log, usersController.editView);
userRouter.put(
    "/myPerfil/:id/edit",
    uploadUser.single("image"),
    usersController.editUser
);
userRouter.get("/logout/", usersController.logout);
module.exports = userRouter;
