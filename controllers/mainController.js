const path=require("path");
const headerView = "header"; 
const footerView = "footer";
const controller={
    home: (req, res)=>{
        res.render("index", { header: headerView, footer: footerView });
    },
    login:(req, res)=>{
        res.render("login", { header: headerView, footer: footerView });
    },
    register:(req, res)=>{
        res.render("register", { header: headerView, footer: footerView });
    },
    misTickets:(req, res)=>{
        res.render("myTickets", { header: headerView, footer: footerView });
    },
    miCarrito:(req, res)=>{
        res.render("productCart", { header: headerView, footer: footerView });
    },
    detalleProducto:(req, res)=>{
        res.render("productDetail", { header: headerView, footer: footerView });
    }
    create: (req, res) => {
        res.render("create", { header: headerView, footer: footerView });
    },
    edit: (req, res) => {
        res.render("edit", { header: headerView, footer: footerView });
    }
};

module.exports=controller;








