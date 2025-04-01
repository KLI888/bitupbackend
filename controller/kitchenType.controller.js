import KitchenType from "../model/kitchen_type.model";
const KitchenTypeService = require("../services/kitchenType.services")


exports.createKitchenType = async (req, res) => {
    try {
        const { name, description, constraints } = req.body;
        const successRes = await KitchenTypeService.createKitchenType(name, description, constraints)
        res.json({status: true, success: "Kitchen Type added successfully"})
        // const newKitchenType = new KitchenType({ name, description, constraints });
        // await newKitchenType.save();
        // res.status(201).json(newKitchenType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all kitchen types
export const getKitchenTypes = async (req, res) => {
    try {
        const kitchenTypes = await KitchenType.find();
        res.status(200).json(kitchenTypes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single kitchen type by ID
export const getKitchenTypeById = async (req, res) => {
    try {
        const kitchenType = await KitchenType.findById(req.params.id);
        if (!kitchenType) return res.status(404).json({ message: "Kitchen Type not found" });
        res.status(200).json(kitchenType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a kitchen type by ID
export const updateKitchenType = async (req, res) => {
    try {
        const updatedKitchenType = await KitchenType.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedKitchenType) return res.status(404).json({ message: "Kitchen Type not found" });
        res.status(200).json(updatedKitchenType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a kitchen type by ID
export const deleteKitchenType = async (req, res) => {
    try {
        const deletedKitchenType = await KitchenType.findByIdAndDelete(req.params.id);
        if (!deletedKitchenType) return res.status(404).json({ message: "Kitchen Type not found" });
        res.status(200).json({ message: "Kitchen Type deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
