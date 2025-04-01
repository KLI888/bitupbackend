const express = require("express")
const AddressController = require("../controller/address.controller");

const router = express.Router();

router.post("/", AddressController.createAddress);
router.get("/:userId", AddressController.getUserAddresses);
router.get("/detail/:id", AddressController.getAddress);
router.put("/:id", AddressController.updateAddress);
router.delete("/:id", AddressController.deleteAddress);
router.put("/set-default/:id", AddressController.setDefaultAddress);

module.exports = router