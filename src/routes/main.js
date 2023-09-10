<<<<<<< HEAD:routes/main.js
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
=======
const express = require("express");
const router = express.Router();
const path = require("path");

//importando controlador
const mainController = require("../controllers/mainController");
//llamando al controlador
router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/misTickets", mainController.misTickets);
router.get("/miCarrito", mainController.miCarrito);
router.get("/detalleProducto", mainController.detalleProducto);
router.get("/create", mainController.create);
router.get("/edit", mainController.edit);
module.exports = router;
>>>>>>> a65812a3c17f3d030836924a4b51496b13547e5d:src/routes/main.js
