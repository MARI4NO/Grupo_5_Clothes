const fs = require("fs");
const path = require("path");

/*
let productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
*/
//FUNCIONES
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
    storeProduct: (req, res) => {
        console.log(req.body);
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
