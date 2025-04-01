const mongoose = require("mongoose");
const db = require("../config/db");

const ThaliSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    basePrice: { type: Number, required: true },
    kitchen: { type: mongoose.Schema.Types.ObjectId, ref: "Kitchen", unique: false }, 

    // Available options
    sabjis: {
      type: [{ name: String, price: Number }],
      default: [
        { name: "Paneer Butter Masala", price: 30 },
        { name: "Aloo Gobi", price: 25 },
        { name: "Dal Tadka", price: 20 },
        { name: "Mix Veg", price: 28 }
      ]
    },

    rotis: {
      type: [{ name: String, price: Number }],
      default: [
        { name: "Tandoori Roti", price: 10 },
        { name: "Butter Naan", price: 15 },
        { name: "Missi Roti", price: 12 },
        { name: "Phulka", price: 8 }
      ]
    },

    rice: {
      type: [{ name: String, price: Number }],
      default: [
        { name: "Plain Rice", price: 15 },
        { name: "Jeera Rice", price: 25 },
        { name: "Fried Rice", price: 35 },
        { name: "Biryani Rice", price: 40 }
      ]
    },

    desserts: {
      type: [{ name: String, price: Number }],
      default: [
        { name: "Gulab Jamun", price: 20 },
        { name: "Rasgulla", price: 18 },
        { name: "Kheer", price: 25 },
        { name: "Ice Cream", price: 30 }
      ]
    },

    // Fixed default options (always included in Thali)
    defaultSabji: { type: String, default: "Dal Tadka" },
    defaultRoti: { type: String, default: "Tandoori Roti" },
    defaultRice: { type: String, default: "Plain Rice" },
    defaultDessert: { type: String, default: "Gulab Jamun" },

    extraItems: {
      roti: { type: Number, default: 0 },
      rice: { type: Number, default: 0 },
      dessert: { type: Number, default: 0 }
    },

    availability: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Thali = db.model("Thali", ThaliSchema);

module.exports = Thali;
