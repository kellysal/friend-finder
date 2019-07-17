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
        res.json(friendMatch(req.body, friends));
    });

    function friendMatch(newFriend, friends) {
        let bestMatch;
        //console.log(bestMatch);
        let smallestDiff = 50;

        friends.forEach(friend => {
            let currentDiff = compareScoreDiff(friend, newFriend);

            if (currentDiff < smallestDiff) {
                bestMatch = friend;
                smallestDiff = currentDiff;
            }
        });
        return bestMatch;
    }

    //array of scores
    //calculate difference of elements between two arrays and sums up the difference
    //difference between user and new friend
    function compareScoreDiff(friendA, friendB) {
        let totalDiff = 0;

        for (let i = 0; i < 10; i++) {
            totalDiff += Math.abs(friendA.scores[i] - friendB.scores[i]);
        };
        return totalDiff;
        //console.log(totalDiff);
    }

};

