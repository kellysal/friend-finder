const express = require("express");
//const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server Listen
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);