const express= require("express")
const p_route = express.Router();
const app = express();
// const productlogics = require("../controller/productlogics")
const productlogics2 = require("../controller/productlogics2")


// for products 
// p_route.get("/",productlogics.getAllProducts)
// .get("/:id",productlogics.getSingleProduct)
// .post("/new",productlogics.insertProduct)
// .put("/:id/change",productlogics.fullyUpdateProduct)
// .patch("/edit/:id",productlogics.partiallyUpdateProduct)
// .delete("/delete",productlogics.deleteProduct)


p_route.get("/new",productlogics2.getpage)
.post("/new",productlogics2.insertProduct)
.get("/",productlogics2.getAllProducts)
.get("/:id",productlogics2.getSingleProduct)
.get("/edit:id",productlogics2.getProductById)
.patch("/edit/:id",productlogics2.partiallyUpdateProduct)
.put("/change/:id",productlogics2.fullyUpdateProduct)
.get("/edit/:id",productlogics2.getProductById)
.delete("/delete/:id",productlogics2.deleteProduct)







module.exports = p_route; 

