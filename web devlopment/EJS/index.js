const express = require("express");
const app = express();
const path = require("path")
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))
app.set("views",path.join(__dirname,"/views"))   // iska mtlb ye ki agr ham directry k baahr se code run kre to vo views folder ko yhi pe directory ke andr hi dhoondega  
const port = 3000
app.listen(port, ()=>{
    console.log("server started ")
})

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/rolldice" , (req,res) =>{
    const value = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs", {num : value})
})


app.get("/ig/:username",(req,res)=>{

    // const followers = ["adam","bob","java","dsa","c++"]
    const instaData = require("./data.json")
    const name = req.params.username;
    const data = instaData[name];
    console.log(data)
    res.render("instagram.ejs",{ data  });
})
  


 
