const mongoose = require("mongoose")
const {Schema} = mongoose;
const express = require("express");
const app = express();


app.listen(3000 , ()=>{
    console.log("server started")
})

const url = "mongodb+srv://pranavbharadwaj174:Pranav%40!2@cluster0.lhizwoh.mongodb.net/relatinalDemo"

const success = async ()=>{
    try{
    let yes = await mongoose.connect(url)
if(yes){
    console.log("connected succefulll with database")
}
    }
    catch(err){
        console.log("unsuccessfull bro")
    }
}

success()




const relationalSchema = new Schema({
    name:String,
    age : Number,
    address : [
        {
            _id : false,        // isse ye hoga ki iska id generate nhi hoga
        village : String,
        city : String,
        },
    ],
});

const User = mongoose.model("User", relationalSchema)

const addUser = async () =>{
    const user1 = new User({
        name : "pranav",
        age:22,
        address : [
            {
                village : "darhar",
                city : "Darbhanga",
            },
        ],
    });
    user1.address.push({village:"sakri",city:"darbhanga"})

    const data = await user1.save();
    if(data){
        console.log("data inserted successfully")
    }
    else{
        console.log("data not inserted")
    }
} 

addUser()