const AddressService = require("../services/address.services");

class AddressController {
    static async createAddress(req, res) {
        try {
            const address = await AddressService.createAddress(req.body);
            res.status(201).json({ success: true, data: address });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getUserAddresses(req, res) {
        try {
            const addresses = await AddressService.getAddressesByUser(req.params.userId);
            res.status(200).json({ success: true, data: addresses });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getAddress(req, res) {
        try {
            const address = await AddressService.getAddressById(req.params.id);
            if (!address) {
                return res.status(404).json({ success: false, message: "Address not found" });
            }
            res.status(200).json({ success: true, data: address });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async updateAddress(req, res) {
        try {
            const address = await AddressService.updateAddress(req.params.id, req.body);
            res.status(200).json({ success: true, data: address });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async deleteAddress(req, res) {
        try {
            await AddressService.deleteAddress(req.params.id);
            res.status(200).json({ success: true, message: "Address deleted successfully" });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async setDefaultAddress(req, res) {
        try {
            const address = await AddressService.setDefaultAddress(req.body.user_id, req.params.id);
            res.status(200).json({ success: true, data: address, message: "Default address updated" });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = AddressController;
