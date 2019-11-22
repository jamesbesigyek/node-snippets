    const mongoose = require("mongoose")
    const Register = require ("../models/models")

    //create test suite for database

describe("registration model test",()=>{ 

    //set up: runs before any test.     

    beforeAll( async()=> {
        try {
            await mongoose.connect("mongodb://localhost:27017/test-db")
            
            await Register.deleteMany({})
        } catch (err){
            console.log("database erroe" + err)
        }
    })



    test ("should be able to save", async()=>{
        const nameSchema = new Register({"firstname":"james"})
        await nameSchema.save()

        const items = await Register.find({})
        expect(items.length).toBe(1)

    })

    // set up runs before any test: in this case to create testdb


    test('should not save when first name isnt input', async () => {
        await Register.deleteMany({})
        
        try {
            
            await (new Register({ "lastname":"james"}).save())
        } catch (err) {
            console.log("database error " + err)
            expect(err.toString()).toBe('ValidationError: firstname: Path `firstname` is required.')
        }
        const items = await Register.find({})
        expect(items.length).toBe(0)
    })

    //test teardown

    afterEach(async () => {
    try {
        await Register.deleteMany({})
    } catch (err) {
        console.log("database error " + err)
    }
    } )


})





/*
test("test name", async()=>{

    await -- delete all previous entrys--
    try{
        await ()=>{
            code to excute
        }
    }
    catch{
        await ()=>{
            code to excute
        }
    }
})

*/
 