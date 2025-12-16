const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  stock: { type: Number },
  category: { type: String },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 }
});
module.exports = mongoose.model('Product', ProductSchema);
