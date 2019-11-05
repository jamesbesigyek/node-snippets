//console.log("hello world") used to test the initial setup

const express = require("express");
const app = express();
/* created an app of express object, then  listening on port
listen method takes two parameters, port number and function*/
app.listen(5000,function(){
    console.log("listening on port 5000")
})