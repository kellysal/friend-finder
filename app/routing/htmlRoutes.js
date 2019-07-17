// Dependencies
const path = require("path");
const express = require("express");

const htmlrouter = express.Router();

htmlrouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlrouter.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

htmlrouter.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//Export HTML routes for other files to use
module.exports = htmlrouter;