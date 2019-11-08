//console.log("hello world") used to test the initial setup

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))
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
    res.send("Hello" + req.params.name) //query parameter
})




app.get("/users", (req, res)=>{         //:name is a path parameter
    res.send("This is class" + req.query.class + "cohort" + req.query.cohort) //query parameter
})

app.get("/register",(req, res, next)=>{
   // console.log("body", req.body)
    //console.log("query params", req.query);
    res.render("register")
})
// posting the form
app.post("/register",(req, res, next)=>{
    console.log("form has been posted")
    console.log("body", req.body)
    console.log("query params", req.query);
    
    res.render("page2")
})


 //The error--Asterix-- below should always be the last

//app.get("*", (req,res)=>{
  //  res.send("wrong path, try another one")
//})
})


//to run the Pug- local host:5000/pugfilename

// sending data to another page

app.post("/page2", (req, res)=>{    //'page2"path for page to be loaded-also similar in the action of loading page
  //  console.log("hello world")
    res.render("page2",             //"page2" is a name of the page to be shown
    {  firstname:req.body.firstname,
       lastname:req.body.lastname, 
       email:req.body.email,
       sex:req.body.gender,
       city:req.body.city,
       country:req.body.country,
       password:req.body.password,


    }) //kevin is another pug file
    console.log("body", req.body)
})