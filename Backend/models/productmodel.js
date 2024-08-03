import mongoose from "mongoose";

// Define the schema
const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    price: {
      type: String, // Changed to Number for price
      required: true,
    },
    productimage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
const productModel = mongoose.model("Product", productSchema);

export default productModel;
