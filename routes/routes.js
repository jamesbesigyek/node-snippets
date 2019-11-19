const express = require("express");
const router = express.Router()
const post = require("../models/models")
const multer = require("multer")
const path = require("path")
// const bodyParser = require("body-parser")
// router.use(bodyParser.json()) 


const mystorage = multer.diskStorage({destination: "./public/uploads/",
filename:function(req, file, cb){cb(null,file.fieldname+"-"+ Date.now() + path.extname(file.originalname)) }}) 

const uploadfile = multer({storage:mystorage}).single("myfile") //myfile is the firld name on the imageupload html

var cons = require('consolidate'); //used to render html docs







router.get("/", (req,res)=>{
    res.render("register")
})

router.get("/upload",(req,res)=>{
    res.render("imageupload")
})

router.post("/upload", (req,res)=>{ //,uploadfile,
    
   // res.send("uploading file") --used temporarily for testing the results of browser
    uploadfile(req,res,(err)=>{
        console.log(req.file)
        if (err){
            res.render(imageupload,{msg:err})
        }else {
        // console.log(req.file) //req.body gives some results but not as expected
        // console.log(req.body)
        res.send("i am in business")

        }
    })
})


router.post("/", async(req, res)=>{
    try{
        const newregister =  post (req.body)
        //"register" is the collection created for the database
        const savedpost = await newregister.save()
        .then(item => {                         //success promise
            savedpost.find().then(items => {        //
            res.render("list",{"users":items}) //"users:lists" renders list pug and passes to list items in users table
            })
        })
    }

    catch(err){                         //failed to save promise
      res.status(400).send("unable to save to database");   // 400 is a status code for fail.
    }
})

module.exports = router

//posts directly to page without going to the database
/*
router.post("/",(req, res)=>{
           
        res.render("list",{firstname:req.body.firstname, 
        lastname:req.body.lastname,
        email:req.body.email,
        gender:req.body.gender,
        city:req.body.city,
        country:req.body.country})   
})
*/


/*
router.post("/",(req, res)=>{
    const newregister = new register (req.body)
            //"register" is the collection created for the database
            newregister.save()
    .then(item => {                         //success promise
        register.find().then(items => {        //
        res.render("list",{users:items}) //"users:lists" renders list pug and passes to list items in users table
        })
    })
    .catch(err => {                         //failed to save promise
      res.status(400).send("unable to save to database");   // 400 is a status code for fail.
    })
})
*/


