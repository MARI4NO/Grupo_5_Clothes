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
router.get("/crearProducto", mainController.crear);
module.exports=router;
=======
const express = require("express");
const router = express.Router();
const path = require("path");

// Configuración de multer
const upload = require("../config/multer.config");

//importando controlador
const mainController = require("../controllers/mainController");

//llamando al controlador
router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/misTickets", mainController.misTickets);
router.get("/miCarrito", mainController.miCarrito);
router.get("/products", mainController.home);
router.get("/products/:id/detail", mainController.detalleProducto);
router.get("/products/create", mainController.create);
router.post("/products", upload.single("image"), mainController.storeProduct);
router.get("/products/:id/edit", mainController.edit);
router.put("/products/:id", upload.single("image"), mainController.update);
router.delete("/delete/:id", mainController.destroy);
module.exports = router;
>>>>>>> a65812a3c17f3d030836924a4b51496b13547e5d:src/routes/main.js
