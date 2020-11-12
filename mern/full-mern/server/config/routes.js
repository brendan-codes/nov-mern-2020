const shoes = require("../controllers/shoes");


module.exports = (app) => {
    app.get("/shoes", shoes.findAll);
    app.post("/shoes", shoes.create);
    app.get("/shoes/:id", shoes.findOne);
    app.delete("/shoes/:id", shoes.delete);
    app.put("/shoes/:id", shoes.update);
}