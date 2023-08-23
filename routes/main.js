const express=require("express");
const router=express.Router();
const path=require("path");

//importando controlador
const mainController=require("../controllers/mainController");
//llamando al controlador
router.get("/", mainController.home);

module.exports=router;