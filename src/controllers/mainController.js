const fs = require("fs");
const path = require("path");

let productsFilePath = path.join(__dirname, "../database/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//FUNCIONES
function addProduct(product) {
    products.push(product);
    const productsString = JSON.stringify(products);
    fs.writeFileSync(
        path.join(__dirname, "../database/products.json"),
        productsString
    );
}
/*
function deletes(prods){
	let stringarray= JSON.stringify(prods)
	fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),stringarray)
}*/

const controller = {
    home: (req, res) => {
        res.render("products/index");
    },
    login: (req, res) => {
        res.render("users/login");
    },
    register: (req, res) => {
        res.render("users/register");
    },
    misTickets: (req, res) => {
        res.render("users/myTickets");
    },
    miCarrito: (req, res) => {
        res.render("products/productCart");
    },
    detalleProducto: (req, res) => {
        res.render("products/productDetail");
    },
    create: (req, res) => {
        res.render("products/create");
    },
    storeProduct: (req, res, next) => {
        const form = req.body;
        const fileUpload = req.file;

        // SI no se carga el archivo informo de un error
        if (!fileUpload) {
            const error = new Error("Por favor seleccione un archivo");
            error.httpStatusCode = 400;
            return next(error);
        }

        const newProduct = {
            id: products.length + 1,
            title: form.title,
            image: fileUpload.filename,
            city: form.city,
            place: form.place,
            address: form.address,
            date: form.date,
            type: form.type,
            price: Number(form.price),
            availables: Number(form.availables),
        };

        addProduct(newProduct);

        res.redirect("/");
    },
    edit: (req, res) => {
        res.render("edit");
    },
    //BORRAR
    destroy: (req, res) => {
        const id = req.params.id;
        const newprods = products.filter((prods) => prods.id != id);
        deletes(newprods);
        res.redirect("/");
    },
};

module.exports = controller;
