const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
     title: String,
     category: String,
     mrp: Number,
     lignThroughMrp: Number,
     desc: String,
     storageInstructions: String,
     marketedBy: String,
     weight: Number,
     image: String,
     cartQuantity: Number,
});
const ProductModel = mongoose.model("product", ProductSchema);

module.exports = {
     ProductModel,
};
