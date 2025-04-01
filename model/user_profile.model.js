import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    email: { 
        type: String, 
        unique: true, 
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    },
    full_name: { type: String, required: true },
    date_of_birth: Date,
    profile_picture_url: String,
    user_type: { type: String, enum: ['student', 'professional', 'other'], required: true, default: "student" },
    status: { type: String, enum: ['active', 'inactive', 'blocked'], default: 'active' },
    preferred_language: { type: String, default: 'en' },
    referral_code: { type: String, unique: true },
    referred_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    device_token: String,
    platform: { type: String, enum: ['android', 'ios', 'web'] },
}, { timestamps: true });

// Ensure unique indexes
userProfileSchema.index({ email: 1 }, { unique: true });
userProfileSchema.index({ referral_code: 1 }, { unique: true });

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
