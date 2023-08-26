const path=require("path");
const controller={
    home: (req, res)=>{
        res.render("./products/index");
    },
    login:(req, res)=>{
        res.render("./users/login")
    },
    register:(req, res)=>{
        res.render("./users/register")
    },
    misTickets:(req, res)=>{
        res.render("./users/myTickets")
    },
    miCarrito:(req, res)=>{
        res.render("./products/productCart")
    },
    detalleProducto:(req, res)=>{
        res.render("./products/productDetail")
    },
    crear:(req, res)=>{
        res.render("create")
    }
};

module.exports=controller;