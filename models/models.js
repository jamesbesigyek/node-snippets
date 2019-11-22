const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;  //a promise is feedback mechanism on the status of the transaction
//mongoose.connect("mongodb://localhost:27017/node-demo"); // you can use mlab- a mongoose online database
const bcryptjs = require("bcryptjs")
/* mongoose.connect("mongodb://localhost:27017/node-demo", ()=>{
  //console.log(" connected to the database")
}); */


//create a file .env-in it create variable and assign it to a url link of database
const nameSchema = new mongoose.Schema({      //creating a schema
    firstname: {
      type:String,
      required:"please enter a first name"
    },
    lastname: String,
    username:{
      type:String,
      unique:true,
      required:"Enter a User Name",
    },
    email: String,
    gender: String,
    city: String,
    country: String,
    
    password: {
      type:String,
      required: "please enter password"
    }

  })

 // nameSchema.add({username {type:String,unique:true,required:true}})

 // const register = mongoose.model("registered", nameSchema); //register is our collection

 // hashing a password before saving
 nameSchema.pre("save",function(next) {
   this.password = bcryptjs.hashSync(this.password,10);
   next()
 })

 //authenticate input against database
 //static method is used when not using an inbuilt method as authenticate below

 nameSchema.statics.authenticate = async function (username, password) {  
  const user = await this.findOne({ username: username })
  if (!user) {
      throw new Error('User not found.');
  }
  const match = await bcryptjs.compare(password, user.password)
  if (match) {
      return user;
  }
}

//same function as above using if user instead of if !user

/* nameSchema.statics.authenticate = async function (username, password) {  
  const user = await this.findOne({ username: username })
  if (user) {
    const match = await bcrypt.compare(password, user.password)
  
      return user;
  }
  if (!match) {
      throw new Error('User not found.');
  }
  
} */

  module.exports =mongoose.model("register",nameSchema)

