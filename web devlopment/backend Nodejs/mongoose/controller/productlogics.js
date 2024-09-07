
const model = require("../models/model");
const express = require("express");
const app = express();
const path = require("path")
const methodOverride = require("method-override")

app.set("view engine","ejs")

app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"views")))
const Product = model.Product;

// exports.insertProduct = async (req, res) => {     // it must be an async await function 
//   try {
//     const product = new Product(req.body);
//     console.log(req.body)


//     const doc = await product.save();
//     // console.log(doc);
//     res.status(201).json(doc);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to save product" });
//   }
// };

exports.insertProduct = async (req, res) => {     // it must be an async await function 
  try {
    const product = new Product(req.body);
    console.log(req.body)


    const doc = await product.save();
    // console.log(doc);
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save product" });
  }
};







exports.getAllProducts = async (req,res) =>{ 
  const products = await Product.find()
    res.json(products);
    console.log(products);
}


exports.getSingleProduct = async (req,res) =>{
    const product = await Product.findById(req.params.id);
    console.log(product)
    res.json(product)

}
 

exports.partiallyUpdateProduct = async (req,res) =>{
  const doc = await Product.findById(req.params.id)
  doc.title = 'AIR INDIA';
  const data = await doc.save();
      res.status(201).json(data);
      console.log(data)
}

const options={
  new: true,
  upsert :true
}

exports.fullyUpdateProduct = async (req,res)=>{
  try{
    const doc  = await Product.findByIdAndUpdate( req.params.id , req.body , options ) ;   //isme 3rd parameter me hm validator lga skte hai in the form of object
  console.log(doc)
    res.status(201).json(doc);
  }
  catch(error){
    console.log(error)
    res.status(500).json(error)

  }
}

exports.deleteProduct =async (req,res)=>{
   
    const doc = await Product.findByIdAndDelete(req.body);
   console.log("this is ",doc)
    res.sendStatus(201);
}
  