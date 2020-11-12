const mongoose = require("mongoose");

const ShoesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Names must be two or more characters!"]
    },
    size: {
        type: Number,
        required: true,
        min: [4, "Smallest size must be 4"],
        max: [13, "Largest is 13!"]
    },
    brand: {
        type: String,
        required: true,
        minlength: [2, "Brands must be two or more characters!"]
    },
    color: {
        type: String,
        required: true,
        minlength: [2, "Color must be two or more characters!"]
    }
}, {timestamps: true});

mongoose.model("Shoes", ShoesSchema);