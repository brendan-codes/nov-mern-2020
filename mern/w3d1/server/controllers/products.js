// import Product from '../models/Product';
const { Product } = require("../models/Product");

module.exports.index = (req, res) => {
    res.json({"message": "Hello world!"});
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

// create

// read
// - read all
// - read by _id

// update
// - update by _id

// delete
// - delete by _id