//DEPENDENCIAS
const fs = require('fs');
const path = require('path');

//FileSystem
/*
let productsFilePath = path.join(__dirname, '../****//*NOMBRE DE LA BASE DE DATOS*');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
*/
//FUNCIONES
/*
function deletes(prods){
	let stringarray= JSON.stringify(prods)
	fs.writeFileSync(path.join(__dirname,'../****//*NOMBRE DE LA BASE DE DATOS*'),stringarray)
}
*/
const controller={

    //RENDERS
    home: (req, res)=>{
        res.render("index");
    },
    login:(req, res)=>{
        res.render("login")
    },
    register:(req, res)=>{
        res.render("register")
    },
    misTickets:(req, res)=>{
        res.render("myTickets")
    },
    misTickets:(req, res)=>{
        res.render("myTickets")
    },
    miCarrito:(req, res)=>{
        res.render("productCart")
    },
    detalleProducto:(req, res)=>{
        res.render("productDetail")
    },

    //BORRAR
    /*
    destroy : (req, res) => {
		const id=req.params.id
		const newprods= products.filter(prods=> prods.id!=id)
		deletes(newprods)
		res.redirect("/")
	}
    */
};

module.exports=controller;