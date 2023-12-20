const crypto = require('crypto');

function Product (name = "",address,category,description) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.address = address;
    this.mainImage = "img-pdto-1.jpg";
    this.images = [];
    this.category = category;
}

module.exports = Product;