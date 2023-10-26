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

function deletes(prods) {
    let stringarray = JSON.stringify(prods);
    fs.writeFileSync(
        path.join(__dirname, "../database/products.json"),
        stringarray
    );
}

const productController = {
    list: (req, res) => {
        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        res.render("products/index", {
            products,
            showLinks,
            idUsuario: usuario ? usuario.id : 0,
        });
    },
    detalleProducto: (req, res) => {
        const { id } = req.params;
        const eventFound = products.find((e) => e.id == id);

        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        res.render("products/productDetail", {
            event: eventFound,
            convertDate: convertToLocaleDate,
            showLinks,
            idUsuario: usuario ? usuario.id : 0,
        });
    },
    create: (req, res) => {
        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        res.render("products/create", {
            showLinks,
            idUsuario: usuario ? usuario.id : 0,
        });
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

        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        res.render("products/edit", {
            event: eventFound,
            showLinks,
            idUsuario: usuario ? usuario.id : 0,
        });
    },
    destroy: (req, res) => {
        const id = req.params.id;
        const newprods = products.filter((prods) => prods.id != id);
        deletes(newprods);
        res.redirect("/products");
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

module.exports = productController;
