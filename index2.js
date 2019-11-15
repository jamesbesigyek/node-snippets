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

 

  app.get("/register", (req,res)=>{
    res.render("register")
})

app.post("/register",(req, res)=>{
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

app.listen(3000,()=>{                           
    console.log("listening on port 3000")
  })