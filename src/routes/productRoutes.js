const express = require("express");
const productRouter = express.Router();

// Configuración de multer
const { uploadProduct } = require("../config/multer.config");

//importando controlador
const productController = require("../controllers/productController");

productRouter.get("/products", productController.list);
productRouter.get("/products/:id/detail", productController.detalleProducto);
productRouter.get("/products/create", productController.create);
productRouter.post(
    "/products",
    uploadProduct.single("image"),
    productController.storeProduct
);
productRouter.get("/products/:id/edit", productController.edit);
productRouter.put(
    "/products/:id",
    uploadProduct.single("image"),
    productController.update
);
productRouter.delete("/delete/:id", productController.destroy);

module.exports = productRouter;
