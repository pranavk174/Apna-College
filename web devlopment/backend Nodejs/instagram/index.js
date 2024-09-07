const express = require("express");
const app= express();
const path = require("path")
const { v4: uuidv4 } = require('uuid');

var methodOverride = require('method-override')
app.use(methodOverride('_method'))


app.set("view engine" , "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/images")))
app.use(express.static(path.join(__dirname,"views")))


app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.listen(3000 ,()=>{
    console.log("server started");
})

let posts = [
    {
        id: uuidv4(),
        pic : "/pranav.jpeg",
        username: "pranav174",
        caption:"i am a software developer",
    },
    {
        id: uuidv4(),
        pic : "/shubham.jpeg",
        username: "Shubham174",
        caption:"i am a backend developer",
    },
    {
        id: uuidv4(),
        pic : "/family.jpeg",
        username: "aman174",
        caption:"i am a software tester",
    },
    {
        id: uuidv4(),
        pic : "/naman.jpeg",
        username: "naman174",
        caption:"i am a sjee aspirant",
    },
]

app.get("/posts",(req,res)=>{
    res.render("show.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs",{posts})
})

//create
app.post("/posts",(req,res)=>{
    const id = uuidv4();
    const {username , caption , pic} = req.body; 
    posts.push({id , username,caption,pic})
    res.render("show.ejs" , {posts} )
    console.log(req.body)
})

// edit
app.patch("/posts/:id",(req,res)=>{
    const id = req.params.id;
    const post = posts.find((p)=> p.id === id)
    const newCaption = req.body.caption;
    post.caption = newCaption
    res.redirect("/posts")

})
app.get("/posts/:id/edit",(req,res)=>{
    const id = req.params.id;
    const post = posts.find((p)=> p.id === id)
    res.render("edit.ejs",{post , id} )
})

app.delete("/posts/:id",(req,res)=>{
    const id = req.params.id;
    posts = posts.filter((p)=> p.id !== id)
    console.log("delete success");
  
    res.redirect("/posts")
})
