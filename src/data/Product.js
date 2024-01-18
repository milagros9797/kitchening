const crypto = require('crypto');

function Product (name ,address,description, category, mainImage) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.description = description.trim();
    this.address = address.trim();
    this.mainImage = mainImage ? mainImage.filename : null;
    this.images = [];
    this.category = category;
}

module.exports = Product;