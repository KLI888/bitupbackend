// const mongoose = require('mongoose');
// const { Schema, model } = mongoose;

// const UserSchema = new Schema({
//   phone: { type: String, required: true, unique: true, match: /^\+?[0-9]{10,15}$/ },
//   email: { type: String, unique: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
//   full_name: { type: String, required: true },
//   date_of_birth: Date,
//   profile_picture_url: String,
//   user_type: { type: String, enum: ['student', 'professional', 'other'], required: true },
//   status: { type: String, enum: ['active', 'inactive', 'blocked'], default: 'active' },
//   preferred_language: { type: String, default: 'en' },
//   referral_code: { type: String, unique: true },
//   referred_by: { type: Schema.Types.ObjectId, ref: 'User' },
//   device_token: String,
//   platform: { type: String, enum: ['android', 'ios', 'web'] },
//   last_login_at: Date,
// }, { timestamps: true });

// const AddressSchema = new Schema({
//   user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   address_type: { type: String, enum: ['home', 'work', 'other'], required: true },
//   name: { type: String, required: true },
//   phone: { type: String, required: true },
//   address_line1: { type: String, required: true },
//   address_line2: String,
//   landmark: String,
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   postal_code: { type: String, required: true },
//   country: { type: String, default: 'India' },
//   latitude: Number,
//   longitude: Number,
//   is_default: { type: Boolean, default: false }
// }, { timestamps: true });

// const KitchenTypeSchema = new Schema({
//   name: { type: String, required: true, unique: true },
//   description: String,
//   constraints: Schema.Types.Mixed
// }, { timestamps: true });

// const KitchenSchema = new Schema({
//   kitchen_type_id: { type: Schema.Types.ObjectId, ref: 'KitchenType', required: true },
//   name: { type: String, required: true },
//   description: String,
//   logo_url: String,
//   banner_url: String,
//   owner_name: { type: String, required: true },
//   business_phone: { type: String, required: true },
//   business_email: { type: String, required: true },
//   fssai_license_no: String,
//   fssai_expiry_date: Date,
//   address_id: { type: Schema.Types.ObjectId, ref: 'Address', required: true },
//   operating_radius: { type: Number, required: true },
//   is_pure_veg: { type: Boolean, default: false },
//   serves_non_veg: { type: Boolean, default: true },
//   cuisine_specialties: [String],
//   opening_time: String,
//   closing_time: String,
//   open_days: [Number],
//   status: { type: String, enum: ['pending', 'active', 'suspended', 'closed'], default: 'pending' },
//   average_rating: { type: Number, default: 0 },
//   rating_count: { type: Number, default: 0 },
//   is_featured: { type: Boolean, default: false },
//   commission_rate: { type: Number, required: true },
//   menu_cutoff_time: String,
//   tax_identification_number: String
// }, { timestamps: true });

// const KitchenBankAccountSchema = new Schema({
//   kitchen_id: { type: Schema.Types.ObjectId, ref: 'Kitchen', required: true },
//   account_holder_name: { type: String, required: true },
//   account_number: { type: String, required: true },
//   ifsc_code: { type: String, required: true, match: /^[A-Z]{4}0[A-Z0-9]{6}$/ },
//   bank_name: { type: String, required: true },
//   branch_name: String,
//   is_primary: { type: Boolean, default: true }
// }, { timestamps: true });




// const FoodCategorySchema = new Schema({
//   name: {type: String, required:true},
//   description: String,
//   icon_url: String,
//   display_order: Number,
// },{timestamps: true})



// const MenuItemSchema = new Schema({
//   kitchen_id: { type: Schema.Types.ObjectId, ref: 'Kitchen', required: true },
//   name: { type: String, required: true },
//   description: String,
//   category_id: { type: Schema.Types.ObjectId, ref: 'FoodCategory' },
//   item_type: { type: String, enum: ['veg', 'non-veg', 'vegan', 'jain'], required: true },
//   price: { type: Number, required: true },
//   discounted_price: { type: Number },
//   image_url: String,
//   preparation_time: Number,
//   is_customizable: { type: Boolean, default: false },
//   customization_options: Schema.Types.Mixed,
//   ingredients: [String],
//   allergens: [String],
//   spice_level: { type: String, enum: ['mild', 'medium', 'spicy'] },
//   is_bestseller: { type: Boolean, default: false },
//   status: { type: String, enum: ['active', 'inactive'], default: 'active' }
// }, { timestamps: true });

// const MealPackageSchema = new Schema({
//   kitchen_id: { type: Schema.Types.ObjectId, ref: 'Kitchen', required: true },
//   name: { type: String, required: true },
//   description: String,
//   package_type: { type: String, enum: ['basic', 'medium', 'premium'], required: true },
//   base_price: { type: Number, required: true },
//   image_url: String,
//   components: Schema.Types.Mixed,
//   is_customizable: { type: Boolean, default: true },
//   customization_options: Schema.Types.Mixed,
//   status: { type: String, enum: ['active', 'inactive'], default: 'active' }
// }, { timestamps: true });

// module.exports = {
// //   User: model('User', UserSchema),
//   Address: model('Address', AddressSchema),
//   KitchenType: model('KitchenType', KitchenTypeSchema),
//   Kitchen: model('Kitchen', KitchenSchema),
//   KitchenBankAccount: model('KitchenBankAccount', KitchenBankAccountSchema),
//   FoodCategory: model('FoodCategory', FoodCategorySchema),
//   MenuItem: model('MenuItem', MenuItemSchema),
//   MealPackage: model('MealPackage', MealPackageSchema)
// };
