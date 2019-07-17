// Dependencies
const path = require("path");
//const express = require("express");

//const app = express.Router();

//Export HTML routes for other files to use
module.exports = function (app) {

    //route home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //route survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //catch if no route
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};