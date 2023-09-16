const fs = require("fs");
const path = require("path");
const convertToLocaleDate = require("../utils/convertToLocaleDate");

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

function updateProducts() {
    console.log(products);
    const producstString = JSON.stringify(products);
    fs.writeFileSync(
        path.join(__dirname, "../database/products.json"),
        producstString
    );
}
/*
function deletes(prods){
	let stringarray= JSON.stringify(prods)
	fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),stringarray)
}*/

const controller = {
    home: (req, res) => {
        res.render("products/index", { products });
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
        const { id } = req.params;
        const eventFound = products.find((e) => e.id == id);
        res.render("products/productDetail", {
            event: eventFound,
            convertDate: convertToLocaleDate,
        });
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

        res.redirect("/products");
    },
    edit: (req, res) => {
        const { id } = req.params;
        const eventFound = products.find((e) => e.id == id);

        res.render("products/edit", { event: eventFound });
    },
    //BORRAR
    destroy: (req, res) => {
        const id = req.params.id;
        const newprods = products.filter((prods) => prods.id != id);
        deletes(newprods);
        res.redirect("/");
    },

    update: (req, res) => {
        const { id } = req.params;

        const event = req.body;
        const fileUpdated = req.file;

        const eventStore = products.find((e) => e.id == id);

        eventStore.title = event.title;
        eventStore.image = fileUpdated
            ? fileUpdated.filename
            : eventStore.image;
        eventStore.city = event.city;
        eventStore.place = event.place;
        eventStore.address = event.address;
        eventStore.date = event.date;
        eventStore.type = event.type;
        eventStore.price = Number(event.price);
        eventStore.availables = Number(event.availables);

        updateProducts();

        res.redirect("/products");
    },
};

module.exports = controller;
