const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');

router .post('/addsubcategory', subcategoryController.addSubcategory);

router.get('/subcategories', subcategoryController.getAllSubcategories);

router.get('/subcategories/:categoryId', subcategoryController.getsubcategoriesBycategories);

router.put('/updatesubcategory/:id', subcategoryController.updateSubcategory);
router.get('editsubcategory/:id', subcategoryController.editSubcategory);
router.delete('/deletesubcategory/:id', subcategoryController.deleteSubcategory);

module.exports = router;