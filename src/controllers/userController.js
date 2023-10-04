const fs = require("fs");
const path = require("path");

let productsFilePath = path.join(__dirname, "../database/users.json");

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
    register: (req, res) => {
        // Codigo para el registro de un usuario
        console.log(req.body);
    },
    misTickets: (req, res) => {
        res.render("users/myTickets");
    },
    miCarrito: (req, res) => {
        res.render("products/productCart");
    },
};

module.exports = userController;
