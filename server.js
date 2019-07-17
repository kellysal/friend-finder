const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlroutes")(app);

// Server Listen
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});