import express from "express";
import {
  addproduct,
  getallproducts,
} from "../controllers/product-controller.js";

const productrouter = express.Router();

productrouter.route("/addproduct").post(addproduct);
productrouter.route("/getproducts").get(getallproducts);

export { productrouter };
