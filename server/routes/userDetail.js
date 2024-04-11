const express=require("express");
const Router=express.Router();

const userDetails = require("../controllers/userDetail")

Router.post("/saveUserDetails",userDetails.saveUserDetail)

module.exports=Router;