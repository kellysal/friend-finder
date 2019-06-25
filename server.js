const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require API routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Start the server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});