const mongoose = require("mongoose");
mongoose.Promise = global.Promise;  //a promise is feedback mechanism on the status of the transaction
mongoose.connect("mongodb://localhost:27017/node-demo"); // you can use mlab- a mongoose online database


//create a file .env-in it create variable and assign it to a url link of database
const nameSchema = new mongoose.Schema({      //creating a schema
    firstname: String,
    lastname: String,
    email: String,
    gender: String,
    city: String,
    country: String,
    password: String

  }
  )

 // const register = mongoose.model("registered", nameSchema); //register is our collection

  module.exports =mongoose.model("register",nameSchema)