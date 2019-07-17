// Dependencies
const friends = require("../data/friends");
const express = require("express");
const bodyParser = require("body-parser");

const app = express.Router();

//json for current friends list
app.get("/api/friends", function (req, res) {
    res.json(friends);
})

//posting a new user and returning a match
app.post("/api/friends", function (req, res) {
    console.log("Posting...");

    var newFriend = req.body;
    console.log(newFriend);

    //covert users's results into array of numbers
    var newScore = function (array) {
        var newScore = [];
        for (var i = 0; i < array.length; i++) {
            newScore.push(parseInt(array[i]));
        }
        return newScore;
    }

    //calculate difference of elements between two arrays and sums up the difference
    var totalDiff = function (arrA, arrB) {
        delta = 0;

        for (let i = 0; i < arrA.length; i++) {
            delta += Math.abs(arrA[i] - arrB[i]);
        }
        return delta;
    }

    //find the index of the minimum difference
    function indexOfMin(array) {
        if (array.length === 0) {
            return -1;
        }

        var min = array[0];
        var minIndex = 0;

        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                minIndex = i;
                min = array[i];
            }
        }

        return minIndex;
    }

    //array of scores
    var newFriendScore = newScore(newFriend['scores[]']);

    var currentFriendScores = [];
    var differences = [];

    //recall friends is an array of objects
    for (let i = 0; i < friends.length; i++) {
        currentFriendScores.push(newScore(friends[i]['scores[]']));
    }

    //difference between user and new friend
    for (let i = 0; i < currentFriendScores.length; i++) {
        differences.push(totalDiff(newFriendScore, currentFriendScores[i]));
    }
    console.log("calculating...");

    var minFriend = indexOfMin(differences);

    var matchFriend = friends[minFriend];
    console.log("matching...");

    console.log(matchFriend);

    //push to array so this person is not included in above calculation for shortest path	
    friends.push(newFriend);
    res.json(matchFriend);
})

//Export API routes for other files to use
module.exports = app;