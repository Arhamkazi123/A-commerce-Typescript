import mongoose from "mongoose";

const cartschema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Purchasers",
    },
    userproduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);
const cartmodel = new mongoose.model("Usercart", cartschema);
export default cartmodel;
