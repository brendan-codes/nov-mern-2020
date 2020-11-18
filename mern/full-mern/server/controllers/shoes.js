const mongoose = require("mongoose");
const Shoes = mongoose.model("Shoes");

module.exports = {
    create: (req, res) => {

        Shoes.find({position: "Captain"})
            .then(shoes => {
                if(shoesContainsBrand(shoes)){

                }
            })

        Shoes.create(req.body)
            .then(shoes => res.json(shoes))
            .catch(err => res.status(400).json(err));
    },
    findAll: (req, res) => {
        Shoes.find().sort({name: 1})
            .then(shoes => res.json(shoes))
            .catch(err => res.status(400).json(err));
    },
    findOne: (req, res) => {
         Shoes.findOne({_id: req.params.id})
            .then(shoe => res.json(shoe))
            .catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        Shoes.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true})
            .then(shoe => res.json(shoe))
            .catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        Shoes.deleteOne({_id: req.params.id})
            .then(shoe => res.json(shoe))
            .catch(err => res.status(400).json(err));
    }
}