const express = require("express");
const userRouter = express.Router();
const { uploadUser } = require("../config/multer.config");
const usersController = require("../controllers/userController");
const { body, validationResult } = require('express-validator');
const log  = require("../config/logMiddelWare")
const guest = require("../config/guestMiddelWare")

// Validaciones para el registro de usuarios
const registerValidations = [
    body('firstName').isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('lastName').isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('email').isEmail().withMessage('Ingrese un correo electrónico válido'),
    body('email').custom(async (value) => {
 }),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).withMessage('La contraseña debe contener al menos una minúscula, una mayúscula, un número y un carácter especial'),
    body('image').custom((value, { req }) => {
    const acceptedFormats = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExtension = value.originalname.split('.').pop().toLowerCase();
        if (!acceptedFormats.includes(fileExtension)) {
            throw new Error('Formato de imagen no válido');
        }
        return true;
    }),
];
        
userRouter.get("/login",guest, usersController.loginView);
userRouter.post("/login", usersController.login);
userRouter.get("/register",guest, usersController.registerView);
userRouter.post(
    "/register",
    uploadUser.single("image"),
    registerValidations,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.array() }); // Renderizar el formulario con errores
        }
        try { 
            const { firstName, lastName, email, password, image } = req.body;
             res.redirect('/login');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error en el servidor'); // Manejo básico de errores
        }
    }
);
userRouter.get("/misTickets", log, usersController.misTickets);
userRouter.get("/miCarrito",log, usersController.miCarrito);
userRouter.get("/myPerfil/:id", log, usersController.miPerfil);
userRouter.get("/myPerfil/:id/edit",log, usersController.editView);
userRouter.put("/myPerfil/:id/edit",uploadUser.single("image"),usersController.editUser);

module.exports = userRouter;
