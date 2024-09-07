const express = require("express");
const app = express();
const path = require("path")

const  model = require("../models/model");
const Chat = model.Chat



app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname, "views")))


exports.getchat = async (req,res)=>{
    const chats = await Chat.find()
    res.render("show.ejs",{chats})
}

exports.createChat  = async (req,res) =>{
    res.render("newChat.ejs");
}

exports.newChat = async (req,res)=>{
    const data = new Chat(req.body);
    data.created_At = new Date();
    try{
    console.log(data);
    const chat = await data.save();
    res.redirect("/chat");
    }
    catch(err){
        console.log("error occured",err)
    }
}

exports.editPage =  async (req,res)=>{
    const chat = await Chat.findById(req.params.id)
    res.render("edit.ejs",{chat})
}

exports.editChat = async (req,res) =>{
    const changes = req.body;
    const user = await Chat.findById(req.params.id);
    user.message = req.body.message;
    user.changed_At = new Date();
    try{
        const chat = await user.save();
        console.log(chat);
        res.redirect("/chat")
    }
    catch(err){
        res.send("error bro")
console.log("error")
    }
}


exports.deleteChat = async (req,res)=>{
    const chat = await Chat.findByIdAndDelete(req.params.id)
    console.log(chat)
    res.redirect("/chat")
}
