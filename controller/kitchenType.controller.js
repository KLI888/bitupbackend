const KitchenType = require("../model/kitchen_type.model");

const KitchenTypeService = require("../services/kitchenType.services");

class KitchenTypeController {
    static async create(req, res) {
        try {
            const kitchenType = await KitchenTypeService.createKitchenType(req.body);
            res.status(201).json(kitchenType);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const kitchenTypes = await KitchenTypeService.getAllKitchenTypes();
            res.json(kitchenTypes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const kitchenType = await KitchenTypeService.getKitchenTypeById(req.params.id);
            if (!kitchenType) return res.status(404).json({ error: "Not found" });
            res.json(kitchenType);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updatedKitchenType = await KitchenTypeService.updateKitchenType(req.params.id, req.body);
            if (!updatedKitchenType) return res.status(404).json({ error: "Not found" });
            res.json(updatedKitchenType);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const deletedKitchenType = await KitchenTypeService.deleteKitchenType(req.params.id);
            if (!deletedKitchenType) return res.status(404).json({ error: "Not found" });
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = KitchenTypeController;
