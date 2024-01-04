const express=require("express");
const router=express.Router();

const responseGenerator=require("../controllers/response")

router.post("/",responseGenerator);
module.exports=router;
