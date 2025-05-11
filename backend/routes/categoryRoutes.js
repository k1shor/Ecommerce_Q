const { addCategory } = require('../controllers/categoryController');
const { isAdmin } = require('../middleware/authorization');

 const router = require('express').Router();

 router.post('/addcategory', isAdmin, addCategory);

 module.exports = router 