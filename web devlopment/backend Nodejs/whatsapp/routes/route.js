const express = require("express")
const C_route = express.Router()
const logic = require("../controllers/logics")


C_route.get("/",logic.getchat)
.post("/new",logic.newChat)
.get("/new",logic.createChat)
.get("/edit/:id",logic.editPage)
.patch("/edit/:id",logic.editChat)
.delete("/delete/:id",logic.deleteChat)

module.exports = C_route;