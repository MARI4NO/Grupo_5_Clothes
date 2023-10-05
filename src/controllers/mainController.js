const fs = require("fs");
const path = require("path");

let productsFilePath = path.join(__dirname, "../database/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {
    home: (req, res) => {
        res.render("products/index", { products });
    },
};

module.exports = mainController;
