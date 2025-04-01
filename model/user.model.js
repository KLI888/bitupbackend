const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        number: {
            type: Number,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["normal", "admin", "shop_manager"],
            default: "normal"
        },
        shop_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shop",
            required: function () { return this.role === "shop_manager"; }
        },
        isVerified: { 
            type: Boolean, 
            default: false 
        },
    },
    { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) return next();
        
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Hide password from API responses
userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
};

const User = db.model("User", userSchema);

module.exports = User;
