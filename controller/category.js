const Category = require("../models/categoryModels");

const addCategory = async (req, res) => {
  try {
    const { name } = await req.body;

    if (!name) {
      return res.send({ error: "Category name is required" });
    }
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.send({ error: "Category Already exists. try another one" });
    }
    const category = new Category({
      name,
      categoryImg: `/uploads/${req?.file?.filename}`,
    });
    category.save();
    res.send({ success: "category created successfully " });
  } catch (error) {
    console.log(error);
    res.send({ error: error });
  }
};
const getAllCategroy = async (req, res) => {
  const category = await Category.find({});
  res.send(category);
};
const getSignleCategroy = async (req, res) => {
  try {
    const id = req.query.cat_id;
    let query = {};
    if (req?.query?.cat_id) {
      query = { _id: id };
    }
    // Define your projection
    const projection = {
      // Exclude the fields you don't want
      name: 0,
      categoryImg: 0,
      _id: 0,
    };

    // Use projection in the query
    const category = await Category.find(query, projection).populate("product");

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.send(category);
  } catch (error) {
    console.error("Error in getSingleCategory:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addCategory,
  getAllCategroy,
  getSignleCategroy,
};
