 const CategoryModel = require('../models/categoryModel');

 //add category
 exports.addCategory = async (req, res) => {
    let categoryToAdd = await CategoryModel.create({
        category_name: req.body.category_name

    })
    if(!categoryToAdd) {
        return res.status(400).json({error: "something went wrong"})

    }
    res.send(categoryToAdd)
 }

   