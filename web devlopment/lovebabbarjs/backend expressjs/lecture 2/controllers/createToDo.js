const toDo = require("../models/schems");
const Schema = toDo.toDoSchema;

// define the route handler
exports.createTodo = async (req, res) => {
    try {
        let title = "pranav"
        let description = "good boy"
       
        console.log(req.body.title ,"...",req.body.description)
        const response = new Schema();
        response.title = title
        response.description =description

        const done = await response.save()
        if(done){
        // send a json response with success flag
        console.log("success")
        res.send("inserted")
    }
    } catch (error) {
        console.log(error)
        res.send("not inserted")
    }
};



exports.insert  = async(req,res)=>{
    const {title , description} = req.body

console.log(title,"....",description)
    const data = new Schema();
    data.title = title;
    data.description = description

    const done = await data.save()
    if(done)
    res.send("inserted")
else{
    res.send("not inserted")
}
}

// // import the model
// const toDo = require("../models/todo");

// // define the route handler
// exports.createTodo = async (req,res) =>{
//     try{

//         // extract the title & description from the request body
//         const {title,description} = req.body;

//         // create a new todo object and insert in the database
//         const response = await toDo.create({title,description})

//         // send a json response with success flag
//         res.sendStatus(201).json(
//             {
//                 success:true,
//                 data : response,
//                 message:"Entry created successfully"
//             }
//         );
//     }
//     catch(error){
//             console.error(error);
//             console.log(error);
//             res.sendStatus(500).json({
//                 success:false,
//                 error:"internal error of the server",
//                 message:error.message,
//             })
//     }
// }




// // Import the model
// const ToDo = require("../models/todo");

// // Define the route handler
// exports.createToDo = async (req, res) => {
//   try {
//     // Extract the title & description from the request body
//     const { title, description } = req.body;

//     // Create a new todo object and insert it into the database
//     const todo = await ToDo.create({ title, description });

//     // Send a JSON response with success flag
//     res.status(200).json({
//       success: true,
//       data: todo,
//       message: "Todo item created successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       data: error.message,
//       message: "Internal Server Error",
//     });
//   }
// };