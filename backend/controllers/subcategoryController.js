exports.addSubcategory = async (req, res) => {
  res.json({ message: 'Subcategory added successfully' });
};

exports.getAllSubcategories = async (req, res) => {
  res.json({ message: 'All subcategories fetched' });
};

exports.getsubcategoriesBycategories = async (req, res) => {
  const categoryId = req.params.categoryId;
  res.json({ message: `Subcategories under category ${categoryId}` });
};

exports.updateSubcategory = async (req, res) => {
  const subcategoryId = req.params.id;
  res.json({ message: `Subcategory ${subcategoryId} updated successfully` }); 
};

exports.editSubcategory = async (req, res) => {
  const subcategoryId = req.params.id;
  res.json({ message: `Subcategory ${subcategoryId} edited successfully` });
};

// ✅ ADD THIS FUNCTION
exports.deleteSubcategory = async (req, res) => {
  const subcategoryId = req.params.id;
  res.json({ message: `Subcategory ${subcategoryId} deleted successfully` });
};
