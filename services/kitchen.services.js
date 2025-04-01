const KitchenModel = require("../model/kitchen.model")

class KitchenService {
    static async createKitchen(data){
        return await KitchenModel.create(data)
    }
}


module.exports = KitchenService