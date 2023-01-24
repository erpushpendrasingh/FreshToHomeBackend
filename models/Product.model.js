const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
     title: String,
     category: String,
     mrp: Number,
     lignThroughMrp: String,
     desc: String,
     storageInstructions: String,
     marketedBy: String,
     weight: String,
     image: String,
     cartQuantity: Number,
     price: Number,
});
const ProductModel = mongoose.model("product", ProductSchema);

module.exports = {
     ProductModel,
};
