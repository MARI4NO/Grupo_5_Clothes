//modulos
const path = require("path");
const express = require("express");
const fs = require("fs");
const methodOverride =  require('method-override');
//requiriendo express en app
const app = express();
//accediendo a recursos estaticos
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

//configurando ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

//requieriendo del mainjs el modulo exportrado
const mainRouter=require("./routes/main")

//usando las rutas de main.js en app.js RUTAS
app.use("/", mainRouter)

// Routes
/* app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/detail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDeatil.html"));
});
app.get("/misTickets", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/myTickets.html"));
});
 */
// Start Server
app.listen(3003, () => {
    console.log("servidor corriendo en el puerto 3003");
});
