const productModel = require('../models/productModel');


//add product
exports.addProduct = async (req, res) => {
    let producttoAdd = await productModel.create({
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        price: req.body.price,
        stock: req.body.stock,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        },
        category: req.body.category,
        subcategory: req.body.subcategory,
        slug: req.body.slug  
    })
    if (producttoAdd) {
        res.status(200).json({
            message: "product added",
            data: producttoAdd
        });
    } else {
        res.status(400).json({
            message: "product not added",
            data: {}
        });
    }
}

 //get al products 
 exports.getallproducts = async (req, res) => {
    let products = await productModel.find();
    if (products.length > 0) {
        res.status(200).json({
            message: "products found",
            data: products
        });
    } else {
        res.status(400).json({
            message: "no products found",
            data: []
        });
    }
 }

 // get product by id 
  exports.getProductbyId = async (req, res) => {
    let product = await productModel.findById(req.params.id)
    if (product) {
        res.status(200).json({
            message: "product found",
            data: product
        });
    } else {
        res.status(400).json({
            message: "product not found",
            data: {}
        })
    }
    }
  


    // update product by id 
    exports.updateProduct = async (req, res) => {
        let product = await productModel.findByIdAndUpdate(req.params.id, {
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            price: req.body.price,
            stock: req.body.stock,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            },
            category: req.body.category,
            subcategory: req.body.subcategory,  
        });
        if (product) {
            res.status(200).json({
                message: "product updated",
                data: product
            });
        } else {
            res.status(400).json({
                message: "product not found",
                data: {}
            });
        }
    }


    // delete product by id   
    exports.deleteProduct = async (req, res) => {
        let product = await productModel.findByIdAndDelete(req.params.id);
        if (product) {
            res.status(200).json({
                message: "product deleted",
                data: product
            });
        } else {
            res.status(400).json({
                message: "product not found",
                data: {}
            });
        }
    }

    