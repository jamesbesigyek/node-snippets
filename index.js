const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser")
const multer = require("multer")

//setting up body parser
// app.use(bodyParser.json())                          //this is middleware
app.use(bodyParser.urlencoded({extended: true}))

// set storage Engine

/* const mystorage = multer.diskStorage(
  {destination: "./public/uploads/",
filename:function(req, file, cb){
  cb(null,file.fieldname + "-"+ Date.now() + 
  path.extname(file.originalname))}})  */

//initialize upload

/* const uploadfile = multer({storage:mystorage}).single("myfile") //myfile is the field name on the imageupload html */

// view engine setup

//app.set("view engine", "pug")
var cons = require('consolidate'); //used to render html docs


app.engine('html', cons.swig) //first install via npm swig- then set up this config
app.set("view engine", "html") //npm install consolidate --to use html engine
app.set("views", path.join(__dirname, "views")) //setting the views path-pugs here is the folder where rendered files are located

// THIS mongoose code below was moved to the models app
//const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;  //a promise is feedback mechanism on the status of the transaction
//mongoose.connect("mongodb://localhost:27017/node-demo"); // you can use mlab- a mongoose online database
// install- dotenv

//creating public folder

app.use(express.static("./public"))


// import routes

const postroutes = require("./routes/routes")
app.use("/register",postroutes)




app.listen(3000,()=>{                           
    console.log("listening on port 3000")
  })