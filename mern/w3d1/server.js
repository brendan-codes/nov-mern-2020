// imports, requires, and other constants
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 9998;

// app.use middleware to run before routes
// these affect incoming requests
// must go before routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// require our internal config files routes and mongoose
require("./server/config/mongoose");
require("./server/routes/routes")(app);

// listen to run the server
app.listen(PORT, () => console.log(`app on ${PORT}`));
