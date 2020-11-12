const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/shoe-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
.then(() => console.log("connected to db!"))
.catch((err) => console.log("failed to connect", err));

require("../models/Shoes");