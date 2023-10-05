const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

// Ruta del archivo JSON de usuarios
const usersFilePath = path.join(__dirname, '../database/users.json');

// usuarios desde el JSON
let users = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const userController = {
    loginView: (req, res) => {
        res.render("users/login");
    },
    login: (req, res) => {
        // Codigo para el logueo de un usuario
    },
    registerView: (req, res) => {
        res.render("users/register");
    },
   register: async (req, res) => {
        try {
            const { firstName, lastName, email, password } = req.body;
            
             // Encriptar la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // Crear el objeto de usuario
            const newUser = {
                firstName,
                lastName,
                email,
                password: hashedPassword,
            };

            // Agregar el nuevo usuario a la lista
            users.push(newUser);

            // Guardar la lista actualizada en el archivo JSON
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

            console.log('Usuario registrado:', newUser);

            res.redirect("/login"); // Redirigir a la página de inicio de sesión
        } catch (error) {
            console.error(error);
            res.status(500).send("Error en el servidor");
        }
    },
    misTickets: (req, res) => {
        res.render("users/myTickets");
    },
    miCarrito: (req, res) => {
        res.render("products/productCart");
    },
};

module.exports = userController;
