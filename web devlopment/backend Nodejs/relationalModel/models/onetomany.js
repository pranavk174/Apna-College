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


const orderSchema = new Schema(
    {
        items : String,
        price : Number,
    }
)

// order Schema
const orderNew = mongoose.model("orderNew" , orderSchema)


const insert = async()=>{
    const orders = await orderNew.insertMany([{
        items: "pizza",
        price: 100,
    },
    {
        items: "burger", 
        price:100,
    },
    {
        items:"Noodles",
        price:100,
    },
    ])

    console.log(orders)
}


// insert();




// customer Schema
const customerSchema = new Schema({
    name:String,
    order: [{
        type : Schema.Types.ObjectId , ref : "orderNew" ,
    },],
})


const Customer = mongoose.model("Customer" , customerSchema)




const save =async ()=> {
    const cust1 = new Customer({
        name:"Pranav",
    })
const order1 = await orderNew.findOne({items:"pizza"})

const order2 = await orderNew.findOne({items:"burger"})

cust1.order.push(order1)
cust1.order.push(order2)

const save = await cust1.save()

if(save){
    console.log("order ho gaya bhai ab wait kro bs")
    console.log(save)
}
}

// save()


const findCustomer = async ()=>{
    const cust = await Customer.find({}).populate("order");     // ye order attribute use kiya hai hamne    , populate method ka use krte hai ki agr ham chahte hai ki output me objecctid ki jagah uska poora data hi show ho to uske liye use krte hai
    console.log(cust[0])
}
 
findCustomer()