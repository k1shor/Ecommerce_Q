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
router.get('/getallcategories', getAllCategories);
router.post('/addcategory', addCategory);

router.put('/updatecategory/:id',  updateCategories);
router.delete('/deletecategory/:id', deleteCategory);
router.get('/editcategory/:id',  editCategory);



module.exports = router;
