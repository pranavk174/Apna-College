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


const customerSchema = new Schema({
    name:String,
    order: [{
        type : Schema.Types.ObjectId , ref : "orderNew" ,
    },],
})


// customerSchema.pre("findOneAndDelete" , async()=>{
//     console.log("deleted before query execution")
// })

customerSchema.post("findOneAndDelete" , async(customer)=>{
    if(customer.order.length)
    {
      const res =   await orderNew.deleteMany({ _id: {$in : customer.order}});
      console.log(res)
    }
})

// order Schema
const orderNew = mongoose.model("orderNew" , orderSchema)

const Customer = mongoose.model("Customer" , customerSchema)

 
const insert = async()=>{
    const orders = await orderNew.insertMany([{
        items: "chowmin",
        price: 100,
    },
    {
        items: "momos", 
        price:100,
    },
    {
        items:"manchurian",
        price:100,
    },
    ])

    console.log(orders)
}


// insert();








const save =async ()=> {
    const cust1 = new Customer({
        name:"Aman sharma",
    })
const order1 = await orderNew.findOne({items:"chowmin"})

const order2 = await orderNew.findOne({items:"manchurian"})

cust1.order.push(order1)
cust1.order.push(order2)

const save = await cust1.save()

if(save){
    console.log("order ho gaya bhai ab wait kro bs")
    console.log(save)
}
}

// save()


const addCustomer = async() =>{ 
    const customer = await Customer.findOne({name : "shubham kumar"})

    const order = new orderNew({
        items:"noodles",
        price:70
    })

    // customer.order.push(order)
 
    // await customer.save()
    const data =await order.save()


    console.log("added customer",data )
}

// addCustomer();

const findCustomer = async ()=>{
    const cust = await Customer.find({}).populate("order" );     // ye order attribute use kiya hai hamne    , populate method ka use krte hai ki agr ham chahte hai ki output me objecctid ki jagah uska poora data hi show ho to uske liye use krte hai
   for(let i = 0; i<cust.length ;i++){
    console.log(cust[i])
   }
    
}
 
// findCustomer()


const delcust = async ()=>{
    const cust = await Customer.findByIdAndDelete('66a38cd14f9ebbc85a76042f')
    console.log("the deleted data is ",cust)
}

delcust()         