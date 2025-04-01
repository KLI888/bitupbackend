const express = require("express");
const ThaliController = require("../controller/thali.controller");

const router = express.Router();

router.post("/", ThaliController.create);
router.get("/", ThaliController.getAll);
router.get("/:id", ThaliController.getById);
router.put("/:id", ThaliController.update);
router.delete("/:id", ThaliController.delete);

module.exports = router;
