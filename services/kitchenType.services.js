const KitchenType = require("../model/kitchen_type.model")

class KitchenTypeService {
    static async createKitchenType(name, description, constraints){
        try {
            const addKitchenType = new KitchenType({name, description, constraints})
            return await addKitchenType.save()
        } catch(err){
            throw(err)
        }
    }
}

module.exports = KitchenTypeService