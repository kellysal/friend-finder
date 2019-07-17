// Dependencies
const path = require("path");
//const express = require("express");

//const app = express.Router();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//Export HTML routes for other files to use
module.exports = app;