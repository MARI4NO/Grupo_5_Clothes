const path=require("path");
const controller={
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
    }
};

module.exports=controller;