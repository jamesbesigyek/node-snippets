//console.log("hello world") used to test the initial setup

const express = require("express");
const app = express();
/* created an app of express object, then  listening on port.
listen method takes two parameters, port number and function*/
app.listen(5000,()=>{                           //arrow function
    console.log("listening on port 5000")
   // app.get(path,callback())- using the get method
app.get("/", (req,res)=>{
    res.send("Hello World- The Node Js App is here")
})
app.get("/about", (req,res)=>{        //get method used for rendering-- reading from server and displaying on
    res.send("Hello World- This is the about space") //browser 

})
app.post("/post", (req,res)=>{        //get method used for rendering-- reading from server and displaying on
    res.send("Hello World- got a post request") //browser 
})
app.put("/put", (req,res)=>{        //get method used for rendering-- reading from server and displaying on
    res.send("Hello World- Got a put request") //browser 
})
app.delete("/delete", (req,res)=>{        //get method used for rendering-- reading from server and displaying on
    res.send("Hello World- Got to delete a request") //browser 
})

app.get("/user/:name", (req,res)=>{
    res.send("Hello" + req.params.name) //query parameter
})

/* The error--Asterix-- below should always be the last*/

app.get("*", (req,res)=>{
    res.send("wrong path, try another one")
})
})
