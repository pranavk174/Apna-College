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


const userSchema = new Schema({
    name:String,
    email:String
})

const postSchema = new Schema({
    content :String ,
    likes : Number,
    user : 
    {type : Schema.Types.ObjectId,
        ref:"User"
    }
})

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post" , postSchema)


const addDataFirstime = async()=>{
    const user1 = new User({
        name: "Shubham Kumar",
        email:"shubhambharadwaj174@gmail.com"
    })

    const post1 = new Post({
        content:"Hello World",
        likes: 4,
        
    })

    post1.user = user1

   const data1 = await user1.save()
    const data2 =  await post1.save()


    if( data2){
        console.log("data inserted successfully Now You can find the data")
    }
    else{
        console.log("error occurred")
    }

}
// addDataFirstTime();  


const addData = async()=>{
    const user = await User.findOne({name:"Pranav Kumar"})

    const post = new Post({
        content:"Bye Bye",
        likes: 2,
        
    })

    post.user = user


    const data =  await post.save()


    if( data){
        console.log("data inserted successfully Now You can find the data")
    }
    else{
        console.log("error occurred")
    }

}
// addData();  
 
const findAll = async()=>{
    const data = await Post.find().populate("user", "name") // isme ye hoga ki user ka full data show hone ke jagah ab srf "name" show hoga ab..
    console.log(data)
}
// findAll()

 
const findSingleData = async ()=>{
    const post = await Post.findOne({content:"Bye Bye"}).populate("user" ,"name" )    
    console.log(post)

}

findSingleData()   