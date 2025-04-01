const mongoose = require("mongoose")
const db = require("../config/db")

const AddressSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    address_type: { 
        type: String, 
        enum: ['home', 'work', 'other'], 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    address_line1: { 
        type: String, 
        required: true 
    },
    address_line2: String,
    landmark: String,
    city: { 
        type: String, 
        required: true 
    },
    state: { 
        type: String, 
        required: true 
    },
    postal_code: { 
        type: String, 
        required: true 
    },
    country: { 
        type: String, 
        default: 'India' 
    },
    latitude: Number,
    longitude: Number,
    is_default: { 
        type: Boolean, 
        default: false 
    }
}, { timestamps: true });

// Create an index to ensure only one default address per user
AddressSchema.index({ user_id: 1, is_default: 1 }, { unique: true, partialFilterExpression: { is_default: true } });

const Address = db.model("Address", AddressSchema);

module.exports = Address;
