const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 9998;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./server/config/mongoose");
require("./server/routes/routes")(app);

app.listen(PORT, () => console.log(`app on ${PORT}`))
