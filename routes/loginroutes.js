const express = require("express");
const router = express.Router()
const post = require("../models/models")
const multer = require("multer")
const path = require("path")
var cons = require('consolidate'); 


router.get("/",(req,res)=>{
    res.render("login")
  });
  
router.post('/', async(req, res) => {
    console.log(req.body)
    // console.log
    try {
        console.log(error)
        const user = await post.authenticate(req.body.username, req.body.password);
        console.log(user)
       // res.send("hey " + user.firstname + " " + user.lastname)
       req.session.user = user;
       res.redirect("/register/search")
    }catch(error){
      console.log(error)
        //res.send("Login Failed")
       // res.redirect('register/search')
       res.render("login",{error:"failed to log in"})
    }
  })

  module.exports = router