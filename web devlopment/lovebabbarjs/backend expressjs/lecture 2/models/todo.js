const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(                 // this is the way to create a table/schema
    {
        title:{                     // attributes
            type:String,
            required:true,
            maxLength:50,
        },
        description:{               // attributes
            type:String,
            required:true,
            maxLenght:50,
        },
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

    }
);


        // this is the way to export this module
exports.todo = mongoose.model("todo",todoSchema)              // iss code ka matlab hai ki "todoSchema" table/schema  ko "todo" file ke naam se export kr diya and isko koi v "todo" ke naam se use kr skta hai 