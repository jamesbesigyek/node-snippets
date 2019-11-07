//console.log("hello world") used to test the initial setup

const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views")) //setting the views path

/* created an app of express object, then  listening on port.
listen method takes two parameters, port number and function*/
app.listen(5000,()=>{                           //arrow function
    console.log("listening on port 5000")
   // app.get(path,callback())- using the get method
app.get("/register", (req,res)=>{
    res.render("register")
})
app.get("/about", (req,res)=>{        //get method used for rendering-- reading from server and displaying on
    res.send("Hello World #{ James } This is the about space") //browser 

})
app.post("/post", (req,res)=>{        //get method used for rendering-- reading from server and displaying on
    res.send("Hello World-#{ James } got a post request") //browser 
})
app.put("/put", (req,res)=>{        //get method used for rendering-- reading from server and displaying on
    res.send("Hello World- #{ James } Got a put request") //browser 
})
app.delete("/delete", (req,res)=>{        //get method used for rendering-- reading from server and displaying on
    res.send("Hello World-#{ James } Got to delete a request") //browser 
})

app.get("/user/:name", (req,res)=>{         //:name is a path parameter
    res.send("Hello #{ James }" + req.params.name) //query parameter
})

app.get("/users/:name", (req,res)=>{         //:name is a path parameter
    res.send("This is class" + req.query.class +"cohort" + req.query.cohort) //query parameter
})


/* The error--Asterix-- below should always be the last*/

app.get("*", (req,res)=>{
    res.send("wrong path, try another one")
})
})
