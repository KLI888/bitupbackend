const OrderService = require("../services/order.services");

class OrderController {
  async create(req, res) {
    try {
      const order = await OrderService.createOrder(req.body);
      res.status(201).json({ success: true, data: order });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json({ success: true, data: orders });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      if (!order) return res.status(404).json({ success: false, message: "Order not found" });
      res.status(200).json({ success: true, data: order });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async update(req, res) {
    try {
      const updatedOrder = await OrderService.updateOrder(req.params.id, req.body);
      res.status(200).json({ success: true, data: updatedOrder });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async delete(req, res) {
    try {
      await OrderService.deleteOrder(req.params.id);
      res.status(200).json({ success: true, message: "Order deleted successfully" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}

module.exports = new OrderController();
