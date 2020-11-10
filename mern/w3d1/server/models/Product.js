// Model file
// defines the database
// defines error messages
// defines the structure of our collections and documents
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Your product must have a name of two or more characters!"]
    },
    price: {
        type: Number,
        required: true,
        min: [0.99, "Min must be about a doller!"],
        max: [99.99, "Don't make it expensive!"]
    }
}, { timestamps: true });

// exports a model with the same name
module.exports.Product = mongoose.model('Product', ProductSchema);