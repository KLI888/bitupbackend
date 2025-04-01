import mongoose from "mongoose";
import db from "../config/db.js"; 
const { Schema } = mongoose;

const KitchenTypeSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    description: String,
    constraints: mongoose.Schema.Types.Mixed
}, { timestamps: true });

const KitchenType = db.model("KitchenType", KitchenTypeSchema);

export default KitchenType;
