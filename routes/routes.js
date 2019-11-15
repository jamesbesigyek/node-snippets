const express = require("express");
const router = express.Router()



router.get("/", (req,res)=>{
    res.render("register")
})

router.post("/",(req, res)=>{
           
        res.render("list",{firstname:req.body.firstname, 
        lastname:req.body.lastname,
        email:req.body.email,
        gender:req.body.gender,
        city:req.body.city,
        country:req.body.country}) 
        
    
    
})


/*
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

module.exports = router
