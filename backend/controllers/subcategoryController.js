const SubcategoryModel = require('../models/subcategoryModel');

// Add subcategory

exports.addSubcategory = async (req, res) => {
  let subcategoryToAdd = await SubcategoryModel.create({
    subcategory_name: req.body.subcategory_name,
    category_id: req.body.category_id,
    description: req.body.description,
    image: req.body.image
  });
  res.send(subcategoryToAdd);
  res.json({ message: 'Subcategory added successfully' });
};

// Get all subcategories

exports.getAllSubcategories = async (req, res) => {
  let subcategories = await SubcategoryModel.find();
  if (!subcategories) {
    return res.status(400).json({ error: "something went wrong" });
  } 
  res.send(subcategories);
  res.json({ message: 'All subcategories fetched' });
};


// Get subcategories by category
exports.getsubcategoriesBycategories = async (req, res) => {
  const categoryId = req.params.categoryId;
  let subcategories = await SubcategoryModel.find({ category_id: categoryId });
  if (!subcategories) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.json({ message: `Subcategories under category ${categoryId}` });
};

//update subcategory
exports.updateSubcategory = async (req, res) => {
  try {
    const subcategoryId = req.params.id;

    const subcategoryToUpdate = await SubcategoryModel.findByIdAndUpdate(
      subcategoryId,
      {
        subcategory_name: req.body.subcategory_name,
        category_id: req.body.category_id,
        description: req.body.description,
        image: req.body.image
      },
      { new: true }
    );

    if (!subcategoryToUpdate) {
      return res.status(404).json({ message: `Subcategory ${subcategoryId} not found` });
    }

    return res.json({ message: `Subcategory ${subcategoryId} updated successfully`, data: subcategoryToUpdate });
  } catch (error) {
    console.error('Error updating subcategory:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};


// Delete subcategory
exports.deleteSubcategory = async (req, res) => {
  const subcategoryId = req.params.id;
  let subcategoryToDelete = await SubcategoryModel.findByIdAndDelete(subcategoryId);
  if (!subcategoryToDelete) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.json({ message: `Subcategory ${subcategoryId} deleted successfully` });
};
