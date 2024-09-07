const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from :{
        type:String  , required:true
    },
    to :{
        type:String , required: true
    },
    message :{
        type:String , maxLength :100
    },
    changed_At :{
            type: Date , reuired:true
    },
    created_At :{
        type:Date,requried : true
    }
})

exports.Chat = mongoose.model("Chat",chatSchema);