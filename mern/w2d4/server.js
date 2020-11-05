// === IMPORTS AND CONFIGS ===
// require statements first
// create express app
// then app.use, app.set
const express = require("express");
const app = express();
app.use(express.json());


require('./config/routes')(app);

// CRUD
// Create
// Read (one, many)
// Update
// Delete


// === SERVER LISTEN ===
// goes below everything else
// don't mix up your ports!
app.listen(9000, () => {
    console.log(`You are running on port 9000!`);
});