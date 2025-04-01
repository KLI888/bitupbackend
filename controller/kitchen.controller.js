const KitchenModel = require("../model/kitchen.model")
const KitchenService = require("../services/kitchen.services")


class KitchenController {
    static async create(req, res){
        try {
            const kitchen = await KitchenService.createKitchen(req.body)
            res.status(201).json(kitchen)
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = KitchenController