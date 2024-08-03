import cartmodel from "../models/ShoppingCart.js";
import productModel from "../models/productmodel.js";

const posttocart = async (req, res) => {
  try {
    const { userproduct } = req.body;
    const user = req.user._id;

    if (userproduct && user) {
      const newcart = new cartmodel({
        user,
        userproduct,
      });

      const savedcart = await newcart.save();
      if (savedcart) {
        res.status(200).json({ message: "Item is added to Cart" });
      } else {
        res.status(500).json({ message: "Failed to add item" });
      }
    } else {
      res.status(500).json({ message: "All fields are required" });
      console.log(error);
    }

    console.log(user);
  } catch (error) {
    res.status(500).json({ message: "problem in saving outermost cart" });
    console.log(error);
  }
};

const getcart = async (req, res) => {
  try {
    const userId = req.user._id;
    const carts = await cartmodel
      .find({ user: userId })
      .populate("userproduct");

    const cartItems = carts.map((cartItem) => ({
      id: cartItem._id,
      product: {
        id: cartItem.userproduct._id,
        name: cartItem.userproduct.productname,
        price: cartItem.userproduct.price,
        image: cartItem.userproduct.productimage,
        description: cartItem.userproduct.description,
        category: cartItem.userproduct.category,
      },
    }));

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cart items" });
    console.error(error);
  }
};

export { posttocart, getcart };
