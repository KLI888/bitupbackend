const KitchenController = require("../controller/kitchen.controller")
const express = require("express")

const router = express.Router()


router.post("/", KitchenController.create)


module.exports = router