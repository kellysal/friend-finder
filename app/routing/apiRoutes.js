// Dependencies
const friends = require("../data/friends");
//const express = require("express");
//const bodyParser = require("body-parser");

//const app = express.Router();

//Export routes for other files to use
module.exports = function (app) {

    //json for current friends list
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //posting a new user and returning a match
    app.post("/api/friends", function (req, res) {
        // console.log("Posting...");
        //push
        friends.push(req.body);
        res.json(findMatch(req.body, friends));
    });

    function findMatch(newFriend, friends) {
        let bestFriend = req.body;
        //console.log(bestFriend);
        let lowestDifference = 50;

        friends.forEach(friend => {
            let currDifference = findScoreDifference(friend, newFriend);
            if (currDifference < lowestDifference) {
                bestFriend = friend;
                lowestDifference = currDifference;
            }
        });
        return bestFriend;
    }

    //array of scores
    //calculate difference of elements between two arrays and sums up the difference
    //difference between user and new friend
    function findScoresDifference(friend1, friend2) {
        let totalDiff = 0;
        for (let i = 0; i < 10; i++) {
            totalDiff += Math.abs(friend1.scores[i] - friend2.scores[i]);
        };
        return totalDiff;
    }

};

