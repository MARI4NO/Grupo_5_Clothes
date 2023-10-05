// ************ REQUIRES ****************
const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
// ************ express() ************
const app = express();

// ************ VARIABLES ************
const PORT = 3003;

// ******** MIDDLEWARES ***********
// recursos estáticos
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
// ************ Template Engine ************
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// ******* REQUIRES MODULOS *********************
const mainRouter = require("./routes/main");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

//usando las rutas de main.js en app.js RUTAS
app.use("/", mainRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

// ************ Start Server **************
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

//cambios provisorios a modificar

// Definir una ruta para renderizar la vista .ejs
app.get("/create", (req, res) => {
    res.render("create", { title: "Crear Producto" });
});
