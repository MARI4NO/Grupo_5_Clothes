const fs = require("fs");
const path = require("path");

let productsFilePath = path.join(__dirname, "../database/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {
    home: (req, res) => {
        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        res.render("products/index", {
            products,
            showLinks,
            idUsuario: usuario ? usuario.id : 0,
        });
    },
};

module.exports = mainController;
