const Order = require("../model/order.model");
const Thali = require("../model/thali.model");

class OrderService {
  async createOrder(orderData) {
    try {
      const { thali, selectedSabji, selectedRoti, selectedRice, selectedDessert, extraRotis, extraRice, extraDesserts, quantity } = orderData;

      // Fetch the Thali to get base price and prices of selected items
      const thaliData = await Thali.findById(thali);
      if (!thaliData) throw new Error("Thali not found");

      // Calculate total price
      let totalPrice = thaliData.basePrice;
      totalPrice += (extraRotis * 10) + (extraRice * 15) + (extraDesserts * 20); // Example prices for extras
      totalPrice *= quantity;

      const newOrder = await Order.create({ ...orderData, totalPrice });

      return newOrder;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllOrders() {
    return await Order.find().populate("user thali kitchen");
  }

  async getOrderById(orderId) {
    return await Order.findById(orderId).populate("user thali kitchen");
  }

  async updateOrder(orderId, updateData) {
    return await Order.findByIdAndUpdate(orderId, updateData, { new: true });
  }

  async deleteOrder(orderId) {
    return await Order.findByIdAndDelete(orderId);
  }
}

module.exports = new OrderService();
