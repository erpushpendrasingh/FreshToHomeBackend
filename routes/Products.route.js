const express = require("express");
const { ProductModel } = require("../models/Product.model");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
     try {
          const product = await ProductModel.find();
          res.send(product);
     } catch (error) {
          console.log("Somthing Error in /product");
          console.log("error:", error);
     }
});
productRouter.post("/create", async (req, res) => {
     const payload = req.body;
     try {
          const new_product = new ProductModel(payload);
          await new_product.save();
          res.send({ msg: "product is created" });
     } catch (error) {
          console.log("error:", error);
          res.send({ msg: error });
     }
});
productRouter.patch("/update/:id", async (req, res) => {
     const payload = req.body;
     const id = req.params.id;
     const product = await ProductModel.findOne({ _id: id });
     const userID_in_product = product.userID;
     const userID_making_req = req.body.userID;
     try {
          if (userID_making_req === userID_in_product) {
               res.send({ msg: "You are not authorized" });
          } else {
               await ProductModel.findByIdAndUpdate({ _id: id }, payload);
               res.send("Update the product");
          }
     } catch (error) {
          console.log(error);
          res.send({ msg: "Something went wrong" });
     }
});
productRouter.delete("/delete/:id", async (req, res) => {
     const id = req.params.id;
     try {
          await ProductModel.findByIdAndDelete({ _id: id });
          res.send("Deleted the product");
     } catch (error) {
          console.log("error:", error);
          res.send({ msg: "Something went wrong" });
     }
});

module.exports = {
     productRouter,
};
