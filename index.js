const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser")
app.use(bodyParser.json())                          //this is middleware
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views")) //setting the views path-pugs here is the folder where rendered files are located
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;  //a promise is feedback mechanism on the status of the transaction
mongoose.connect("mongodb://localhost:27017/node-demo"); // you can use mlab- a mongoose online database

// import routes

const postroutes = require("./routes/routes")
app.use("/register",postroutes)






// install- dotenv
//create a file .env-in it create variable and assign it to a url link of database
const nameSchema = new mongoose.Schema({      //creating a schema
    firstname: String,
    lastname: String,
    email: String,
    gender: String,
    city: String,
    country: String,
    password: String

  })

  const register = mongoose.model("register", nameSchema); //register is our collection

 



app.listen(3000,()=>{                           
    console.log("listening on port 3000")
  })