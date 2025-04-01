const router = require("express").Router()
const UserController = require("../controller/user.controller")



router.post("/api/register", UserController.register)

module.exports = router;






