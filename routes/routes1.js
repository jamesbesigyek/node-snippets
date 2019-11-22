const express = require("express");
const router = express.Router()
const post = require("../models/models")
const multer = require("multer")
const path = require("path")
var cons = require('consolidate'); //used to render html docs
// const bodyParser = require("body-parser")
// router.use(bodyParser.json()) 


const mystorage = multer.diskStorage({destination: "./public/uploads/",
filename:function(req, file, cb){cb(null,file.fieldname+"-"+ Date.now() + path.extname(file.originalname)) }}) 

const uploadfile = multer({storage:mystorage,
limits:{fileSize:10000000},
fileFilter:function(req,file,cb){
    checkfiletype(file,cb) //call a custom built function to check the file type then build the function 
}}).single("myfile") //myfile is the field name on the imageupload html

function checkfiletype(file,cb){

    //allowed file extension

    const filetype = /jpg|gif|jpeg|png/
    const extension = filetype.test(path.extname(file.originalname).toLowerCase())

    // check mimetypes

    const mimetype = filetype.test(file.mimetype)

    if (mimetype && extension){
        return cb(null,true)

    }else{
        cb("error: Images only")
        
    }
}









router.get("/", (req,res)=>{
    res.render("register")
})

router.get("/upload",(req,res)=>{
    res.render("imageupload")
})

router.post("/upload", (req,res)=>{ //,uploadfile, upload is an HTML file and we use the HTML engine
    
   // res.send("uploading file") --used temporarily for testing the results of browser
    uploadfile(req,res,(err)=>{
       
        if (err){
            res.render("imageupload", {msg:"error: image is too big"}
            )
            //failing to return an error message for very big.....files
            
            console.log("begining of error")
            console.log(req.file)
            console.log(req.fileSize)
            console.log("end of error")
        }else {
        // console.log(req.file) //req.body gives some results but not as expected
        
        console.log(req.file)
        res.send("i am in business")
        if(req.file == undefined){
            res.render("imageupload",{msg:"error: No file selected"})
        }
        else{
            res.render("imageupload",
            {msg:"error: File uploaded",
            file:`uploads/${req.file.filename}` //file name is the one used in storage at update 
        })
        }
        }
    })
})

router.post("/", async (req, res) => {
    const register = new post(req.body); //create an instance of the Register model for data entered(req.body==got from the user)
    console.log(req.body)
    try {
      await register.save();
      console.log("Item has been saved");
      const items = await Register.find();
      res.render("list", { users: items });
    } catch (err) {
      //.catch promise and used because nodejs asyncronously waits
      res.status(500).send("unable to save to database");
      console.log("Error :" +err);
    }
  });

// Saving to a database --- code below not working

/* router.post("/",(req, res)=>{
    console.log(req.body)
    const newregister =  new post(req.body)
    newregister.save()
        
        .then(item => {                         //success promise
            post.find().then(items => {        //
            res.render("list",{"users":items}) //"users:lists" renders list pug and passes to list items in users table
            })
        })
    

        .catch(err => {                         //failed to save promise
         res.status(400).send("unable to save to database today");   // 400 is a status code for fail.
         console.log("Error :" +err);
        })
}) */
 


/* router.post("/", async(req, res)=>{
    console.log(req.body);
    try{
        
        //"register" is the collection created for the database
        const savedpost = await newregister.save()
        .then(item => {                         //success promise
            post.find().then(items => {        //
            res.send("you have been registered successfully") //"users:lists" renders list pug and passes to list items in users table
            })
        })
    }

    catch(err){                         //failed to save promise
        console.log("Error :" +err);
      res.status(400).send("unable to save to database today");   // 400 is a status code for fail.
    }
}) */



/* router.post("/", async(req, res)=>{
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
      res.status(400).send("unable to save to database today");   // 400 is a status code for fail.
    }
})
 */
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


