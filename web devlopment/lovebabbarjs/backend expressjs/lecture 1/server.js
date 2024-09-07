const express = require("express");
const app = express();




//use to prase in the express body -> POST or PUT
const bodyparser = require("body-parser");


// parse the json data  and add it to tha request.body object
app.use(bodyparser.json())

const port = 3000;
app.listen(port, ()=>{
    console.log(`server started at port ${port}`);
})

//routes
app.get("/apple",(req,res)=>{                  // get request
    res.send("hello brother this is tha appl route path")
})


// post request
app.post("/cars/model",(req,res)=>{
    const {name,model} = req.body;
    console.log(name +" and "+model);
    res.send("request submitted succcessfully");
})



// mongoDB

const mongo = require("mongoose");
const url = "mongodb+srv://pranavbharadwaj174:Pranav%40!2@cluster0.lhizwoh.mongodb.net/"
mongo.connect(url,{
    useNewUrlParser :true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log(
    error
    )
})
   
