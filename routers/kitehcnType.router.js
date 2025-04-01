const express = require("express");
const KitchenTypeController = require("../controller/kitchenType.controller");

const router = express.Router();

router.post("/", KitchenTypeController.create); // Create a KitchenType
router.get("/", KitchenTypeController.getAll); // Get all KitchenTypes
router.get("/:id", KitchenTypeController.getById); // Get a specific KitchenType
router.put("/:id", KitchenTypeController.update); // Update a KitchenType
router.delete("/:id", KitchenTypeController.delete); // Delete a KitchenType

module.exports = router;
