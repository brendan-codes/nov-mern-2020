const Fake = require("../models/Fake")

module.exports = {
    create: (req, res) => {
        res.json({message: "You have created a fake!", fake: new Fake()});
    },

    show: (req, res) => {
        res.json(new Fake());
    },

    post: (req, res) => {
        res.json({message: "You have posted!"})
    }
}