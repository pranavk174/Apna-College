const express = require("express");
const path = require("path")
const app = express()
const { v4: uuidv4 } = require('uuid');     // to generate unique IDs   

const methodOverride = require("method-override")      // ye use kr rhe hai qki form tag sirf get or post ko support krta hai to issliye iske use se ham usko override kr skte hai
app.use(methodOverride("_method"))

app.set("view engine","ejs")

app.set("views" ,path.join(__dirname,"views"))
app.set(express.static(path.join(__dirname,"public")))
// app.use(express.static(path.join(__dirname,"views/css")))
app.use(express.static(path.join(__dirname,"public/css")))


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = 3000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

let posts  = [
    {
        id: uuidv4(),       // this method will generate unique IDs
        username:"pranav",
        content:"i am a web developer",
    }, 
    {
        id:uuidv4(),
        username:"shubham",
        content:"i am a custom officer",
    },
    {
        id:uuidv4(),
        username:"aman",
        content:"i am a footballer",
    },
    {
        id:uuidv4(),
        username:"Naman",
        content:"i am a JEE aspirant",
    }
]


app.get("/posts" , (req,res)=>{
    res.render("posts.ejs", {posts})
})


app.get("/posts/new",(req,res)=>{
    res.render("form.ejs")
}) 

app.post("/posts",(req,res)=>{
    let id =  uuidv4() 
    let {username , content } = req.body;
    posts.push({id , username,content})
    // console.log(req.body)
    console.log(posts)
    res.redirect("/posts")
  
})

app.get("/new",(req,res)=>{
    res.redirect("/posts/new")
})

app.get("/posts/:id",(req,res)=>{
    const id = req.params.id;
    const post = posts.find((p) => id === p.id)
    console.log(post)
    res.render("show.ejs" , {post})
    
})


app.patch("/posts/:id",(req,res)=>{

    let id = req.params.id;
    let post = posts.find((p) => p.id === id)
    let newContent = req.body.content;
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");

})

app.get("/posts/:id/edit",(req,res)=>{
    const id = req.params.id;
    const post = posts.find((p)=> p.id === id);
    res.render("edit.ejs",{post})
})

app.delete("/posts/:id",(req,res)=>{
    let id = req.params.id;
    posts = posts.filter((p) => p.id !== id)
    console.log("delete success");
    res.redirect("/posts");
})