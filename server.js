
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiroutes = require("./app/routing/apiroutes.js");
const htmlroutes = require("./app/routing/htmlroutes.js");

app.use(apiroutes);
app.use(htmlroutes);

// Server Listen
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});