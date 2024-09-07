const express = require("express")
const app = express();
const mongoose = require("mongoose");
const {Schema} = mongoose
const port = 3000;

app.listen(port, ()=>{
    console.log("server started")
})



const connect = async () =>{
    try{
      const yes =  await mongoose.connect("mongodb+srv://pranavbharadwaj174:Pranav%40!2@cluster0.lhizwoh.mongodb.net/testdatabase")
        if(yes){
            console.log("connected to database");
        }
    }
    catch(error){
        console.log("connection unsuccessfull")
    }
}

connect()



