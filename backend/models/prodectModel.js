const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    descriptioin: String,
    rating: String,
    images: [{
        image: String
    }],
    category: String,
    seller: String,
    stack: String,
    noofReviews: String,
    createdAr: Date
})

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;