// ************ REQUIRES ****************
const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const cors = require("cors");
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
app.use(session({ secret: "9/12/18-exclub" }));
app.use(cors());
// ************ Template Engine ************
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// ******* REQUIRES MODULOS *********************
const mainRouter = require("./routes/main");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const apiRouter = require("./api/routes");

//usando las rutas de main.js en app.js RUTAS
app.use("/", mainRouter);
app.use("/", productRouter);
app.use("/", userRouter);
app.use("/api", apiRouter);

// ************ Start Server **************
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

//cambios provisorios a modificar

// Definir una ruta para renderizar la vista .ejs
app.get("/create", (req, res) => {
    res.render("create", { title: "Crear Producto" });
});
