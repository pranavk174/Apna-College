const express = require("express")

const logics = require("../controller/api_logics")
const router = express.Router()

// BY THIS WE CAN ALSOE DEFINE ROUTES BUT ISME POORE APPLICATION PE ROUTES LGA DIYA HAI
// const app = express()
// app.post("/data", logics.createUser)
// app.get("/data", logics.getAllUser)
// app.get("/data/:version",logics.getSingleUser)
// app.put("/data/:version",logics.fullyUpdateUser)
// app.patch("/data/:version",logics. partiallyUpdateUser)
// app.delete("/data/:version",logics.deleteUser)


// BY THIS WE CAN ALSO DEFINE ROUTES BUT ISME SRF METHODS PE ROUTES LAGAYA HAI
// ye DEPENDENT routes hai qki inhe ham srf kisi ek particular json data k sath use kr skte hai
// const router = express.Router()
// router.get("/data",logics.getAllUser)
// .get("/data/:version",logics.getSingleUser)
// .post("/data",logics.createUser)
// .put("/data/:version",logics.fullyUpdateUser)
// .patch("/data/:version",logics.partiallyUpdateUser)
// .delete("/data/:version",logics.deleteUser)



// ye INDEPENDENT routes hai qki inhe ham kisi v json data k sath use kr skte hai

// for Users

router.get("/",logics.getAllUser)
.get("/:version",logics.getSingleUser)
.post("/",logics.createUser)
.put("/:version",logics.fullyUpdateUser)
.patch("/:version",logics.partiallyUpdateUser)
.delete("/:version",logics.deleteUser)




module.exports = router;