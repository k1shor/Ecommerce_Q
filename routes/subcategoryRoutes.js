const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');

router .post('/addsubcategory', subcategoryController.addSubcategory);

router.get('/subcategories', subcategoryController.getAllSubcategories);

router.get('/subcategories/:categoryId', subcategoryController.getsubcategoriesBycategories);

module.exports = router;