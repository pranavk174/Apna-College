const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`server is started on port ${port}`);
})


// app.use((req,res) =>{                    // it handle all the incomiing request.
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1> <ul><li>mango</li> <li>banana</li> </ul>"
//     res.send(code)
// })


app.get("/apple",(req,res)=>{                      // ye request k accoring path ko route karta hai
    res.send("<h1>you ar on apple path </h1>")
})


app.get("/banana",(req,res)=>{
    res.send("you ar on bannana path")
})

app.get("*",(req,res)=>{
    res.send("<h1>this path doesnt exist</h1>"
    )
})