const express = require('express');
const router = express.Router();

const {
  getAllCategories,
  addCategory,
 
  updateCategories,
  deleteCategory,
  editCategory
} = require('../controllers/categoryController'); 

const { isAdmin } = require('../middleware/authorization');

// Routes
router.get('/getallcategories', isAdmin, getAllCategories);
router.post('/addcategory', isAdmin, addCategory);

router.put('/updatecategory/:id', isAdmin, updateCategories);
router.delete('/deletecategory/:id', isAdmin, deleteCategory);
router.get('/editcategory/:id', isAdmin, editCategory);

module.exports = router;
