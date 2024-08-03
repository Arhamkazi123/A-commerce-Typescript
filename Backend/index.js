import express from "express";
import "./config.js";
import { connectdb } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authrouter } from "./routes/auth-router.js";
import { productrouter } from "./routes/product-route.js";
import { cartrouter } from "./routes/cart-router.js";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authrouter);
app.use("/api/productoverview", productrouter);
app.use("/api/cart", cartrouter);

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running ");
  });
});
