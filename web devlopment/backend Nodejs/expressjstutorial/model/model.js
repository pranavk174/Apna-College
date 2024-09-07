const mongoose = require("mongoose");
const {Schema} = mongoose;
const prodSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    discountPercentage: Number,
    rating:Number,
    brand:String,
    thumbNail:String,
    images: [String]
   
})

const Product = mongoose.model("product",prodSchema)

module.exports = Product;