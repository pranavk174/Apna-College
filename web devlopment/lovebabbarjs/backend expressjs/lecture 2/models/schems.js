const mongoose = require("mongoose")

const {Schema} = mongoose;

const toDoSchema = new Schema({
    title : String,
    description : String,
    createdAt:{                 // attributes
        type:Date,
        required:true,
        default:Date.now(),
},
    updatedAt:{                 // attributes
    type:Date,
    required:true,
    default:Date.now(),
}
})

exports.toDoSchema = mongoose.model("toDoSchema",toDoSchema)