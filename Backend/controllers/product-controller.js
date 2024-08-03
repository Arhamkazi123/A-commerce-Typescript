import productmodel from "../models/productmodel.js";

const addproduct = async (req, res) => {
  const { productname, price, productimage, description, category } = req.body;
  try {
    if (productname && price && productimage && description && category) {
      const newprod = new productmodel({
        productname,
        price,
        productimage,
        description,
        category,
      });
      const savedprod = await newprod.save();
      if (savedprod) {
        return res.status(200).json({ message: "Product Entry Created" });
      } else {
        return res.status(400).json({ message: "Product not saved" });
      }
    } else {
      return res.status(400).json({ message: "All fields are mandatory" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Problem in outermost addproductcontroller" });
  }
};

const getallproducts = async (req, res) => {
  try {
    const getallprods = await productmodel.find({});
    res.status(200).json({ message: getallprods });
  } catch (error) {
    res.status(500).json({ message: "getallproducts outermost error" });
  }
};
export { addproduct, getallproducts };
