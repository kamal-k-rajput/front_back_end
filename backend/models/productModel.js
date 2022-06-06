const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    required: true,
    type: Number,
  },
  category: [{ type: String }],
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
