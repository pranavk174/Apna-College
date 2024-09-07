
const model = require("../models/model");
const express = require("express");
const app = express();
const path = require("path")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine","ejs")

app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"views")))
app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"images")))
const Product = model.Product;



exports.getpage = async(req,res)=>{
  res.render("new.ejs");
}

exports.insertProduct = async (req, res) => {     // it must be an async await function 
  const newProduct = {
    images: req.body.images,
    brand : req.body.brand,
    title:req.body.title,
    description:req.body.description,
    discountPercentage : req.body.discountPercentage ,
    price: req.body.price,
    rating:req.body.rating

  }
  try {
    const product = new Product(newProduct);
    console.log(newProduct)
    const doc = await product.save();
    console.log(doc);
    res.redirect("/product")
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save product" });
  }
};


   




exports.getAllProducts = async (req,res) =>{ 
  const products = await Product.find()
    res.render("show.ejs",{products});
    // console.log(products);
}


exports.getSingleProduct = async (req,res) =>{
    const product = await Product.findById(req.params.id);
    // console.log(product)
    res.render("showsingle.ejs",{product})

}
 

exports.getProductById = async(req,res) =>{
    const id = req.params.id;
    try{
      const product = await Product.findById(id);
      console.log("the data we found is", product)
      res.render("edit.ejs",{product})
    }
    catch(err){
      res.send("data not found");
      console.log(err)
    }
  }
 

exports.partiallyUpdateProduct = async (req,res) =>{

  const id = req.params.id;
  console.log(id)
  try{
  const doc = await Product.findById(id);
  console.log("id is ",doc)
  doc.description = req.body.description;
  doc.price = req.body.price;
  doc.discountPercentage = req.body.discountPercentage; 
  
  doc.images = req.body.images;
  const data = await doc.save();
  console.log("data is ",data)
  res.redirect("/product") 
  }
  catch(err){
    console.log(err);
    res.send("error ocurred")
  } 
}




const options={
  new: true,
  upsert :true
}

exports.fullyUpdateProduct = async (req,res)=>{
  try{
    const doc  = await Product.findByIdAndUpdate( req.params.id , req.body , options ) ;   //isme 3rd parameter me hm validator lga skte hai in the form of object
  console.log(doc)
    res.redirect("/product")
  }
  catch(error){
    console.log(error)
    res.status(500).json(error)

  }
}

exports.deleteProduct =async (req,res)=>{
    const doc = await Product.findByIdAndDelete(req.params.id);
  //  console.log("this is ",doc)
    res.redirect("/product");
}
   