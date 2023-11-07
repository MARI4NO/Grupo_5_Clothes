const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");

const db = require("../database/models");

// Ruta del archivo JSON de usuarios
const usersFilePath = path.join(__dirname, "../database/users.json");

// usuarios desde el JSON
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const User = require("../models/userModel");
const userController = {
    loginView: (req, res) => {
        const showLinks = req.session.usuario ? true : false;
        res.render("users/login", { showLinks });
    },
    login: (req, res) => {
        const showLinks = req.session.usuario ? true : false;
        let userToLogin = User.findByField("email", req.body.email);

        if (userToLogin) {
            let CorrectPassword = bcryptjs.compareSync(
                req.body.password,
                userToLogin.password
            );
            if (CorrectPassword) {
                req.session.usuario = userToLogin;
                return res.redirect("/");
            }
            return res.render("users/login", {
                errors: {
                    email: {
                        msg: "LA CONSTRASEÑA ES INCORRRECTA",
                    },
                },
                showLinks,
            });
        }
        return res.render("users/login", {
            errors: {
                email: {
                    msg: "USUARIO NO ENCONTRADO",
                },
            },
            showLinks,
        });
    },
    registerView: (req, res) => {
        const showLinks = req.session.usuario ? true : false;
        res.render("users/register", { showLinks });
    },
    register: async (req, res) => {
        try {
            const { firstName, lastName, email, password } = req.body;
            const fileUpload = req.file;

            // SI no se carga el archivo informo de un error
            if (!fileUpload) {
                const error = new Error("Por favor seleccione un archivo");
                error.httpStatusCode = 400;
                return next(error);
            }

            // Encriptar la contraseña
            const hashedPassword = await bcryptjs.hash(password, 10);

            // Crear el objeto de usuario
            const newUser = {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                image: fileUpload.filename,
            };

            db.Users.create(newUser)
                .then((status) => {
                    res.redirect("/login"); // Redirigir a la página de inicio de sesión
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.error(error);
            res.status(500).send("Error en el servidor");
        }
    },
    misTickets: (req, res) => {
        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        res.render("users/myTickets", { idUsuario: usuario.id, showLinks });
    },
    miCarrito: (req, res) => {
        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        res.render("products/productCart", {
            idUsuario: usuario.id,
            showLinks,
        });
    },
    miPerfil: (req, res) => {
        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        const id = usuario.id;
        const perfil = users.find((miperfil) => {
            return miperfil.id == id;
        });
        res.render("users/myPerfil", {
            miperfil: perfil,
            idUsuario: usuario.id,
            showLinks,
        });
    },
};

module.exports = userController;
