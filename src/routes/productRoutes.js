const express = require("express");
const productRouter = express.Router();

// Configuración de multer
const { uploadProduct } = require("../config/multer.config");

//Configuración de express validator
const { body, validationResult } = require('express-validator');

//importando controlador
const productController = require("../controllers/productController");
const log = require("../config/logMiddelWare");

// Validaciones para la creación de productos
const createProductValidations = [
    body('name').isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('description').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
    body('image').custom((value, { req }) => {
        const acceptedFormats = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExtension = value.originalname.split('.').pop().toLowerCase();
        if (!acceptedFormats.includes(fileExtension)) {
            throw new Error('Formato de imagen no válido');
        }
        return true;
    }),
];

// Validaciones para la modificación de productos
const updateProductValidations = [
    body('name').isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('description').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
    body('image').custom((value, { req }) => {
        const acceptedFormats = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExtension = value.originalname.split('.').pop().toLowerCase();
        if (!acceptedFormats.includes(fileExtension)) {
            throw new Error('Formato de imagen no válido');
        }
        return true;
    }),
];

productRouter.get("/products", productController.list);
productRouter.get("/products/:id/detail", log, productController.detalleProducto);
productRouter.get("/products/create", log, productController.create);
productRouter.post("/products", uploadProduct.single("image"), createProductValidations, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('create-product', { errors: errors.array(), message: 'Hubo un problema al crear el producto' });
        }
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor'); // Manejo básico de errores
    }
});
productRouter.get("/products/:id/edit", log, productController.edit);
productRouter.put("/products/:id", uploadProduct.single("image"), updateProductValidations, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
              return res.render('edit-product', { errors: errors.array(), message: 'Hubo un problema con la validación de los campos' });
        }
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor'); // Manejo básico de errores
    }
});
productRouter.delete("/delete/:id", productController.destroy);
module.exports = productRouter;
