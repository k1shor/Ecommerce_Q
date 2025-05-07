// controllers/subcategoryController.js

exports.addSubcategory = async (req, res) => {
    // logic to add subcategory
    res.json({ message: 'Subcategory added successfully' });
  };
  
  exports.getAllSubcategories = async (req, res) => {
    // logic to get all subcategories
    res.json({ message: 'All subcategories fetched' });
  };
  
  exports.getsubcategoriesBycategories = async (req, res) => {
    const categoryId = req.params.categoryId;
    // logic to fetch subcategories by categoryId
    res.json({ message: `Subcategories under category ${categoryId}` });
  };
  