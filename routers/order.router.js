const express = require("express");
const OrderController = require("../controller/order.controller");

const router = express.Router();

router.post("/", OrderController.create);
router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getById);
router.put("/:id", OrderController.update);
router.delete("/:id", OrderController.delete);

module.exports = router;
