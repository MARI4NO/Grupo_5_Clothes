const express = require("express");
const userRouter = require("./user.routes");
const productsRouter = require("./products.routes");

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);

module.exports = router;
