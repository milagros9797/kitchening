const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/product");

module.exports = (req,res) => {
    const {name,address,description,category} = req.body;

    const newProduct = new Product(name, address, description, category)
    const products = leerJSON('products');
    products.push(newProduct);

    escribirJSON(products, 'products')

    return res.redirect('/admin')
}