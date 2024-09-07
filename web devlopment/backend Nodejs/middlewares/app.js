const express = require("express")
const app = express()
const customError = require("./expressError");

app.get("/random",(req,res)=>{
   res.send("this is random page")
})



const reqToken = (req,res,next)=>{
    let {token} = req.query ;
    if(token === "hello"){
        console.log("yess baby");
       next();
    }
   throw new customError(401,"access denied bro")
}

app.get("/api" ,reqToken ,(req ,res , next)=>{
        res.send("ok good")
} )


app.use((req,res,next)=>{
    console.log("middleware 1")
    next();
})

app.get("/err",(req,res)=>{     // "/err"  route ko access krenge to ye jo error generate krega usko "error handler middleware" handler manage krega
    abcd = abcd;

})

app.use((err , req,res , next )=>{      // error handler middleware , jo v errors aayenge ye usko handle krega
    console.log("-----ERROR1------")
   
  next(err)     //  ye line ka matlb hai ki agr aaghe koi error handling middleware defined hai to usko trigger krega, or agr nhi defined hai to express ka default error handler middleware trigger hoga
})

app.use((err , req,res , next )=>{      // error handler middleware , jo v errors aayenge ye usko handle krega
    console.log("-----ERROR2------")
//    res.send(err)
  next(err)    //  ye line ka matlb hai ki agr aaghe koi error handling middleware defined hai to usko trigger krega, or agr nhi defined hai to express ka default error handler middleware trigger hoga
})

app.use((err,req,res,next)=>{
    const {status , message}  = err;
    res.status(status).send(message)
 })

// app.use((req,res,next)=>{
//     console.log("middleware 2")
//     res.status(401).send("page not found")
// })



app.get("/",(req,res)=>{
    console.log(("i am the route data"))
    res.send("responce ended")
})

app.listen(3000 , ()=>{
    console.log("started")
}) 


