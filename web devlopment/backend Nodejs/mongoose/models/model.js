const mongoose = require("mongoose");
const {Schema} = mongoose;
const prodSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    discountPercentage: Number,
    rating: {type:Number ,min:[0,"wrong rating"],max:[5,"wrong-rating"]},     // isme {} is braces k andr hamne validators define kiye hai datatype,min value,max value etc
    brand:String,
    thumbNail:String,
    images: String
   
})

exports.Product = mongoose.model("Product",prodSchema);

// module.exports = Product;d