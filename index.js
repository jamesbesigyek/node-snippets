//console.log("hello world") used to test the initial setup

const express = require("express");
const app = express();
/* created an app of express object, then  listening on port.
listen method takes two parameters, port number and function*/
app.listen(5000,()=>{                           //arrow function
    console.log("listening on port 5000")
   // app.get(path,callback())- using the get method
app.get("/", function(req,res){
    res.send("Hello World- The Node Js App is here")
})
app.get("/about", function(req,res){
    res.send("Hello World- This is the about space")
})
})
