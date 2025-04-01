const mongoose = require("mongoose");
const db = require("../config/db");

const KitchenSchema = new mongoose.Schema({
    kitchen_type_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "KitchenType", 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    description: String,
    logo_url: String,
    banner_url: String,
    owner_name: { 
        type: String, 
        required: true 
    },
    business_phone: { 
        type: String, 
        required: true 
    },
    business_email: { 
        type: String, 
        required: true 
    },
    fssai_license_no: String,
    fssai_expiry_date: Date,
    address_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Address", 
        required: true 
    },
    operating_radius: { 
        type: Number, 
        required: true 
    },
    is_pure_veg: { 
        type: Boolean, 
        default: false 
    },
    serves_non_veg: { 
        type: Boolean, 
        default: true 
    },
    cuisine_specialties: [String],
    opening_time: String,
    closing_time: String,
    open_days: [Number], // Example: [0, 1, 2, 3, 4, 5, 6] for all days
    status: { 
        type: String, 
        enum: ["pending", "active", "suspended", "closed"], 
        default: "pending" 
    },
    average_rating: { 
        type: Number, 
        default: 0 
    },
    rating_count: { 
        type: Number, 
        default: 0 
    },
    is_featured: { 
        type: Boolean, 
        default: false 
    },
    commission_rate: { 
        type: Number, 
        required: true 
    },
    menu_cutoff_time: String,
    tax_identification_number: String
}, { timestamps: true });



const Kitchen = db.model("Kitchen", KitchenSchema);

module.exports =  Kitchen;
