var express = require("express");
var router = express.Router();
var use = require("../config/fb.js")

console.log("hello from fb_controller");

router.get("/", function (req, res) {
    console.log("req");
    res.render("../views/index");

});

module.exports = router;

