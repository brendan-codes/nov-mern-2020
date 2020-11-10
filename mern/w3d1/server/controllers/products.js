// back end controller
// imports models
// handles request and responses, calls DB
const { Product } = require("../models/Product");

module.exports.index = (req, res) => {
    res.json({"message": "Hello world!"});
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}

module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteProduct = (req, res) => {
    console.log(req.params);
    Product.deleteOne({_id: req.params.id})
        .then(response => {
                console.log(response);
                res.json(response);
        })
        .catch(err => {
                console.log(err);
                res.status(400).json(err);
        });
}

// create

// read
// - read all
// - read by _id

// update
// - update by _id

// delete
// - delete by _id