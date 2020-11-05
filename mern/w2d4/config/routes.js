const fakes = require("../controllers/fakes");

module.exports = (app) => {
    app.get("/fakes/one", fakes.show)
    app.get("/fakes", fakes.create)
    app.post("/fakes", fakes.post)
}


