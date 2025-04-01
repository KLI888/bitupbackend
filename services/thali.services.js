const Thali = require("../model/thali.model");

class ThaliService {
  async createThali(data) {
    try {
      const thali = new Thali(data);
      return await thali.save();
    } catch (error) {
      throw error;
    }
  }

  // Get all Thalis
  async getAllThalis() {
    try {
      return await Thali.find();
    } catch (error) {
      throw error;
    }
  }

  // Get Thali by ID
  async getThaliById(id) {
    try {
      return await Thali.findById(id);
    } catch (error) {
      throw error;
    }
  }

  // Update Thali by ID
  async updateThali(id, data) {
    try {
      return await Thali.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw error;
    }
  }

  // Delete Thali by ID
  async deleteThali(id) {
    try {
      return await Thali.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ThaliService();
