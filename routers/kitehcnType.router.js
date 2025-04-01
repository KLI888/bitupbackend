const router = require("express").Router()
import { 
    createKitchenType, 
    getKitchenTypes, 
    getKitchenTypeById, 
    updateKitchenType, 
    deleteKitchenType 
} from "../controller/kitchenType.controller"

router.post("/api/kitchenType", createKitchenType);
// router.get("/api/kitchenType", getKitchenTypes);
// router.get("/api/kitchenType/:id", getKitchenTypeById);
// router.put("/api/kitchenType/:id", updateKitchenType);
// router.delete("/api/kitchenType/:id", deleteKitchenType)

module.exports = router