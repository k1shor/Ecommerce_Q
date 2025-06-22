const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { isAdmin } = require('../middleware/authorization');

// Routes 
router.post('/addproduct', productController.addProduct);
router.get('/getallproducts', productController.getallproducts);
router.get('/getproductbyid/:id', productController.getProductbyId);
router.put('/updateproduct/:id', isAdmin, productController.updateProduct);
router.delete('/deleteproduct/:id', isAdmin, productController.deleteProduct);

module.exports = router;
