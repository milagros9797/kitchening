const {leerJSON, escribirJSON} = require('../../data');
const {existsSync, unlinkSync} = require('fs');

module.exports = (req,res) => {
   
    const {name, address, description, category} = req.body;

    const {id} = req.params

    const products = leerJSON('products');

    const productsUpdated = products.map(product => {
        if(product.id == id) {

            (req.file && existsSync('public/images/' + product.mainImage)) && unlinkSync('public/images/' + product.mainImage)

            product.name = name.trim();
            product.description = description.trim();
            product.address = address.trim();
            product.mainImage = req.file ? req.file.filename : product.mainImage ;
            product.images = [];
            product.category = category;
        }
        return product
    })


    escribirJSON(productsUpdated,'products')

    return res.redirect('/admin')
}