const path = require("path");
const express = require("express");
const fs = require("fs");

const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/detail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDeatil.html"));
});
app.get("/misTickets", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/myTickets.html"));
});

// Start Server
app.listen(3003, () => {
    console.log("servidor corriendo en el puerto 3003");
});
