// Routing file
// lists incoming routes
// points them to controller methods
const ProductController = require("../controllers/products");

module.exports = (app) => {
    app.get("/products/index", ProductController.index);
    app.post("/products", ProductController.createProduct);
    app.get("/products", ProductController.allProducts);
    app.delete("/products/:id", ProductController.deleteProduct);
    app.put("/products/:id", ProductController.editById);
    app.get("/products/:id", ProductController.findById);
}