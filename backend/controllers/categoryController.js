const CategoryModel = require('../models/categoryModel');

// Add category
exports.addCategory = async (req, res) => {
  let categoryToAdd = await CategoryModel.create({
    category_name: req.body.category_name
  });
  if (!categoryToAdd) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(categoryToAdd);
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  let categories = await CategoryModel.find();
  if (!categories) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(categories); 
};

// Update category
exports.updateCategories = async (req, res) => {
  let categoryToUpdate = await CategoryModel.findByIdAndUpdate(
    req.params.id,
    { category_name: req.body.category_name },
    { new: true }
  );
  if (!categoryToUpdate) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(categoryToUpdate); 
};

// Edit category
exports.editCategory = async (req, res) => {
  let categoryToEdit = await CategoryModel.findById(req.params.id);
  if (!categoryToEdit) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(categoryToEdit); 
};

// Delete category
exports.deleteCategory = async (req, res) => {
  let categoryToDelete = await CategoryModel.findByIdAndDelete(req.params.id);
  if (!categoryToDelete) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send({ message: "Category deleted successfully" }); 
};
