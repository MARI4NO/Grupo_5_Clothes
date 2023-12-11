const express = require("express");
const productRouter = express.Router();

// Configuración de multer
const { uploadProduct } = require("../config/multer.config");

//importando controlador
const productController = require("../controllers/productController");
const log = require("../config/logMiddelWare");

productRouter.get("/products", productController.list);
productRouter.get(
    "/products/:id/detail",
    log,
    productController.detalleProducto
);
productRouter.get("/products/create", log, productController.create);
productRouter.post(
    "/products",
    uploadProduct.single("image"),
    productController.storeProduct
);
productRouter.get("/products/:id/edit", log, productController.edit);
productRouter.put(
    "/products/:id",
    uploadProduct.single("image"),
    productController.update
);
productRouter.delete("/delete/:id", productController.destroy);
module.exports = productRouter;
