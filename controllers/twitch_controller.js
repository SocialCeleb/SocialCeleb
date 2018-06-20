var express = require("express");
var router = express.Router();
var use = require("../config/twitch.js")

console.log("hello from twitch_controller");

router.get("/", function (req, res) {
    console.log("req");
    res.render("index");

});

module.exports = router;
