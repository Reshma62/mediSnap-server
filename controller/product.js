const Product = require("../models/addProduct");
const Category = require("../models/categoryModels");

const addProduct = async (req, res) => {
  const { name, price, category } = req.body;
  const image = req?.file?.filename;
  const product = new Product({
    name,
    productImage: `/uploads/${image}`,
    price,
    category,
  });
  await product.save();
  res.send({ message: "Product added successfully" });
  await Category.updateOne(
    { _id: product.category },
    { $push: { product: product._id } },
    { new: true }
  );
};
const getProduct = async (req, res) => {
  const product = await Product.find({}).populate("category");
  res.send(product);
};

module.exports = {
  addProduct,
  getProduct,
};
