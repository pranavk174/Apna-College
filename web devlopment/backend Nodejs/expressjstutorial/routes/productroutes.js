const express= require("express")
const p_route = express.Router();
const productlogics = require("../controller/productlogics")

// for products 
p_route.get("/",productlogics.getAllProducts)
.get("/:id",productlogics.getSingleProduct)
.post("/",productlogics.insertProduct)
.put("/:id",productlogics.fullyUpdateProduct)
.patch("/:id",productlogics.partiallyUpdateProduct)
.delete("/:id",productlogics.deleteProduct)

module.exports = p_route