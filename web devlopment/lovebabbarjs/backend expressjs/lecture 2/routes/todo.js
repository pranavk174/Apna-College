const express = require("express")
const router = express.Router();


// import controller
const logic = require("../controllers/createToDo")

// console.log(createToDo)
// define the API routes
router.post("/createToDo" ,logic.insert) ;  // path ko controller ke sath mapp krwa diya



module.exports = router;