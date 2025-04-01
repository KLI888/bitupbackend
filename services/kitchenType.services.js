const KitchenType = require("../model/kitchen_type.model")


class KitchenTypeService {
    static async createKitchenType(data) {
        return await KitchenType.create(data);
    }

    static async getAllKitchenTypes() {
        return await KitchenType.find();
    }

    static async getKitchenTypeById(id) {
        return await KitchenType.findById(id);
    }

    static async updateKitchenType(id, data) {
        return await KitchenType.findByIdAndUpdate(id, data, { new: true });
    }

    static async deleteKitchenType(id) {
        return await KitchenType.findByIdAndDelete(id);
    }
}

module.exports = KitchenTypeService;
