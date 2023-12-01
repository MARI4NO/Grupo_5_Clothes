const express = require("express");
const productsAPIController = require("../controllers/products.controller");

const productsRouter = express.Router();

productsRouter.get("/", productsAPIController.list);
productsRouter.get("/:id", productsAPIController.detail);

module.exports = productsRouter;
