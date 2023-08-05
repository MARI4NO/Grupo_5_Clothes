const path = require("path");
const express=require("express");
const fs=require("fs");

const app=express();
const publicPath=path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3003, ()=>{
    console.log("servidor corriendo en el puerto 3003");
});
app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});