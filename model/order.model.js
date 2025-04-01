const mongoose = require("mongoose");
const db = require("../config/db");

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who placed the order
    kitchen: { type: mongoose.Schema.Types.ObjectId, ref: "Kitchen", required: true }, // Reference to kitchen
    thali: { type: mongoose.Schema.Types.ObjectId, ref: "Thali", required: true }, // Reference to Thali being ordered

    // Selected customizations
    selectedSabji: { type: String, required: true },
    selectedRoti: { type: String, required: true },
    selectedRice: { type: String, required: true },
    selectedDessert: { type: String, required: true },

    // Extra items
    extraRotis: { type: Number, default: 0 },
    extraRice: { type: Number, default: 0 },
    extraDesserts: { type: Number, default: 0 },

    quantity: { type: Number, required: true, default: 1 }, // Number of thalis ordered
    totalPrice: { type: Number, required: true }, // Total price calculation

    orderStatus: {
      type: String,
      enum: ["Pending", "Preparing", "Completed", "Cancelled"],
      default: "Pending",
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },

    deliveryAddress: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = db.model("Order", OrderSchema);

module.exports = Order;
