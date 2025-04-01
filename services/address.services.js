const Address = require("../model/address.model");

class AddressService {
    static async createAddress(data) {
        return await Address.create(data);
    }

    static async getAddressesByUser(userId) {
        return await Address.find({ user_id: userId });
    }

    static async getAddressById(addressId) {
        return await Address.findById(addressId);
    }

    static async updateAddress(addressId, data) {
        return await Address.findByIdAndUpdate(addressId, data, { new: true });
    }

    static async deleteAddress(addressId) {
        return await Address.findByIdAndDelete(addressId);
    }

    static async setDefaultAddress(userId, addressId) {
        // Unset previous default
        await Address.updateMany({ user_id: userId }, { is_default: false });

        // Set new default
        return await Address.findByIdAndUpdate(addressId, { is_default: true }, { new: true });
    }
}


module.exports = AddressService;

