const fs = require("fs");
const data = JSON.parse((fs.readFileSync("product.json","utf-8")))     // ye encoding k liye use kiya jaata h
const products = data.products;


// exports.insertProduct = (req,res)=>{
//     console.log(req.body);
//    products.push(req.body )
//    res.sendStatus(201).json({
//     type : "POST"
// })  }


exports.insertProduct = (req,res)=>{
    console.log(req.body);
    products.push(req.body)
    res.sendStatus(201).json({
        type : "POST"
    })

}



exports.getAllProducts = (req,res) =>{
    res.json(products);
}


exports.getSingleProduct = (req,res) =>{
    const id = +req.params.id;
    const product = products.find(p=>p.id === id)
    console.log(product)
    res.json(product)

}






exports.partiallyUpdateProduct = (req,res) =>{
    const id = +req.params.id;
    const productIndex = products.find(p=> p.id === id)
    const product = products[productIndex]
    products.splice(productIndex,1,{...product, ...req.body})
}

exports.fullyUpdateProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=> p.id === id)
    products.splice(productIndex,1,{...req.body , id:id});
    res.sendStatus(201);
}

exports.deleteProduct = (req,res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id === id);
    products.splice(productsIndex,1);

    res.sendStatus(500);
}