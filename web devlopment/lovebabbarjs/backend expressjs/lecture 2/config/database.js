const mongoose = require("mongoose");
require("dotenv").config();         // for configuration with (.env) file


const  url = process.env.database_url 

const dbConnect =async () =>{
    try{
    let done = await  mongoose.connect(url)
    if(done){
    console.log("connection succesfully established")
    }
}
catch(err){
            console.log("error occurred")
           
        }
}

// dbConnect();
module.exports = dbConnect; 