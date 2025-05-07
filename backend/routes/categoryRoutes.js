const { addCategory } = require('../controllers/categoryController');

 const router = require('express').Router();

 router.post('/addcategory', addCategory);

 module.exports = router 