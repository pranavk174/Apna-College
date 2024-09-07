const express = require("express");
const app = express();

const userRoute = require("./routes/todo");

// load config form dotenv file

require("dotenv").config();
const port =  process.env.port;

// middleware toparse json body
 app.use(express.json()); 
 app.use(express.urlencoded({extended:true}));

 // import routes
 
 app.listen(port,() =>{
    console.log(`server stated successfully at port ${port} `);
 })

//database connection
const connection = require("./config/database");
connection()

 

// home page default route
app.get("/" ,((req,res) =>{
    res.send("<h1>this is home page buddy </h1> ")
}))

 // mount the API routes .. 
 app.use("/api/v1",userRoute);

 