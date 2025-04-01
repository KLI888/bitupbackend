const ThaliService = require("../services/thali.services");

class ThaliController {
  // Create a new Thali
  async create(req, res) {
    try {
      const thali = await ThaliService.createThali(req.body);
      res.status(201).json(thali);
    } catch (error) {
      res.status(500).json({ message: "Error creating thali", error });
    }
  }

  // Get all Thalis
  async getAll(req, res) {
    try {
      const thalis = await ThaliService.getAllThalis();
      res.status(200).json(thalis);
    } catch (error) {
      res.status(500).json({ message: "Error fetching thalis", error });
    }
  }

  // Get a Thali by ID
  async getById(req, res) {
    try {
      const thali = await ThaliService.getThaliById(req.params.id);
      if (!thali) {
        return res.status(404).json({ message: "Thali not found" });
      }
      res.status(200).json(thali);
    } catch (error) {
      res.status(500).json({ message: "Error fetching thali", error });
    }
  }

  // Update Thali by ID
  async update(req, res) {
    try {
      const thali = await ThaliService.updateThali(req.params.id, req.body);
      if (!thali) {
        return res.status(404).json({ message: "Thali not found" });
      }
      res.status(200).json(thali);
    } catch (error) {
      res.status(500).json({ message: "Error updating thali", error });
    }
  }

  // Delete Thali by ID
  async delete(req, res) {
    try {
      const thali = await ThaliService.deleteThali(req.params.id);
      if (!thali) {
        return res.status(404).json({ message: "Thali not found" });
      }
      res.status(200).json({ message: "Thali deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting thali", error });
    }
  }
}

module.exports = new ThaliController();
