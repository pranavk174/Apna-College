const express = require("express")
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/model")
const {Schema} = mongoose;
const methodOverride = require("method-override")
app.use(methodOverride("_method"));
const route = require("./routes/route")

app.use(express.json())
app.use(express.urlencoded({extended:true}));

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

const url = "mongodb+srv://pranavbharadwaj174:Pranav%40!2@cluster0.lhizwoh.mongodb.net/Whatsapp"

let connection = async () =>{
    try{
        const yes = await mongoose.connect(url)
        if(yes){
            console.log("Connected to MongoDB");
        }
    }
    catch(err){
        console.log("connection unsuccessfull",err)
    }
}

connection()

app.use("/chat",route)