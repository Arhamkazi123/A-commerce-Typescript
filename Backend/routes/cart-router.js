import express from "express";
import { posttocart, getcart } from "../controllers/cart-controller.js";
import protectRoute from "../middleware/protectRoute.js";

const cartrouter = express.Router();

cartrouter.route("/savecartitems").post(protectRoute, posttocart);
cartrouter.route("/getcartitems").get(protectRoute, getcart);
export { cartrouter };
