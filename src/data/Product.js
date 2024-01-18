const crypto = require('crypto');

function Product (name ,address,description, category, mainImage, images) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.description = description.trim();
    this.address = address.trim();
    this.mainImage = mainImage ? mainImage[0].filename : null;
    this.images = images ? images.map(image => image.filename) : [];
    this.category = category;
}

module.exports = Product;