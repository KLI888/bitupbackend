const mongoose = require("mongoose")
const db = require("../config/db")
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const KitchenTypeSchema = new Schema({
    // _id: Number,
    name: { type: String, required: true },
    description: { type: String, required: true },
    constraints: { type: Object, default: {} }
}, { timestamps: true });
// KitchenTypeSchema.plugin(AutoIncrement, { id: 'kitchen_id_counter', inc_field: '_id' });

const KitchenType = db.model("KitchenType", KitchenTypeSchema);

module.exports = KitchenType;
