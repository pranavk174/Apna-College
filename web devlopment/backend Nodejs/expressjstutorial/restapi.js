const express = require("express");
const app = express();
app.use(express.json())    // ye request ki body ko parse krne k liye hai 

const  userRouter =  require("./routes/routers")
const productRouter = require("./routes/productroutes")



const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.use("/data",userRouter)
app.use("/products", productRouter) 
app.use(express.static("public"))








