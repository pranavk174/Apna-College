
const fs = require("fs");
const data = JSON.parse((fs.readFileSync("data.json","utf-8")))     // ye encoding k liye use kiya jaata h
const users = data.users;
    


// CRUD APIs
// GET API  /data    READ operation
exports.getAllUser = (req,res) =>{     // ye poore json data ko show krega array k form me
    res.json(users);
}

// POST API
exports.createUser = (req,res)=>{
    console.log(req.body);
    users.push(req.body)
    res.sendStatus(201).json({
        type : "POST"
    })

}

// GET API  /data/:version    READ a particular user data
exports.getSingleUser = (req,res) =>{
   
    const version = +req.params.version    //  + sign lgaane se string integer me convert ho jaata hai 
    const user = users.find(u=>u.version === version)   // kisi particular person ko find krne k liye api hai ye
    res.sendStatus(200).json(user);
    // console.log(user)
}


// PUT API  /data/:version    fully update the existing data
exports.fullyUpdateUser = (req,res) =>{
   
    const version = +req.params.version    //  + sign lgaane se string integer me convert ho jaata hai 
    const userIndex = users.findIndex(u=>u.version === version)   // kisi particular person ko find krne k liye api hai ye
    users.splice(userIndex,1,{...req.body , version:version})
    res.sendStatus(201).json(
        {
            type:"PUT"
        }
    );

    
    // console.log(user) 
}


// PATCH API  /data/:version    partially update the existing data
exports.partiallyUpdateUser = (req,res) =>{
   
    const version = +req.params.version    //  + sign lgaane se string integer me convert ho jaata hai 
    const userIndex = users.findIndex(u=>u.version === version)   // kisi particular person ko find krne k liye api hai ye
    const user = users[userIndex]
    users.splice(userIndex,1,{...user ,...req.body })    // update srf ussi property ko krega jo req.body me hogi ye mtlb hai iss syntax ka
    res.sendStatus(201).json(
        {
            type:"PUT"
        }
    );

    
    // console.log(user) 
}


// DELETE API  /data/:version    delete the existing data
exports.deleteUser = (req,res) =>{
   
    const version = +req.params.version    //  + sign lgaane se string integer me convert ho jaata hai 
    const userIndex = users.findIndex(u=>u.version === version)   // kisi particular person ko find krne k liye api hai ye
    const user = users[userIndex]
    users.splice(userIndex,1);
    res.json(user); 
    

    
    // console.log(user) 
}
