const express=require("express");
const router=express.Router();
const path=require("path");

//importando controlador
const mainController=require("../controllers/mainController");
//llamando al controlador
router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/misTickets", mainController.misTickets);
router.get("/miCarrito", mainController.miCarrito);
router.get("/detalleProducto", mainController.detalleProducto);

//BORRANDO PRODUCTO
/*
router.delete("/delete/:id", mainController.destroy)
*/

module.exports=router;