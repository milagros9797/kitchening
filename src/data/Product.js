const crypto = require('crypto');

function Product (name = "",address,category,description) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.description = description.trim();
    this.address = address.trim();
    this.mainImage = "img-pdto-1.jpg";
    this.images = [];
    this.category = category;
}

module.exports = Product;