const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/product");
const {validationResult} = require('express-validator');
const categories = require("../../data/categories.json");
const fs = require('fs');

module.exports = (req,res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()){
        const {name,address,description,category} = req.body;
        
        const mainImage = req.files.mainImage;
        const images = req.files.images;
        
        const newProduct = new Product(name, address, description, category, mainImage, images)
        const products = leerJSON('products');
        products.push(newProduct);
        
        escribirJSON(products, 'products')
        
        return res.redirect('/admin')
    } else {
        if(req.file){
            fs.existsSync(`public/images/${req.file.filename}`) &&
            fs.unlinkSync(`public/images/${req.file.filename}`)
        }
        return res.render('products/product-add',{
            errors : errors.mapped(),
            old : req.body,
            categories
        })
    }
}