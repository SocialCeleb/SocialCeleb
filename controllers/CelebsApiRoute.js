var db = require("../models");
var celebServer = require("../celeb.js");
var followers = celebServer.followers;

console.log("CelebsApiRoute");

// get data for Celeb including their popularity
// module.exports = function(app) {
//     app.get("/api/celebs", function (req, res) {
//         console.log("inside celeb get request", req.body);
//         db.Celeb.findAll({
//             include: [db.Popularity]
//         }).then(function (results) {
//             res.json(results);
//         });
//     });

module.exports = function(app) {
    app.post("/api/celebs", function (req, res) {
        console.log("inside celeb get request", req.body);
        db.Celeb.create({
            name
        }).then(function (results) {
            res.json(results);
        });
    });





















































// // get data for Popularity mode
//     app.get("/api/popularity", function (req, res) {
//         console.log("inside celeb get request", req.body);
//         db.Celeb.findAll({
//             include: [db.Popularity]
//         }).then(function (results) {
//             res.json(results);
//         });
//     });


};

// // get data for popularity model
//     app.get("/api/popularity", function (req, res){
//     console.log("inside popularity get request", req.body);
//     Popularity.findAll({}).then(function (results) {
//         res.json(results);
//     });
// });

// input data to the database 
// app.post("/api/create/"), function (req, res) {
//     console.log("inside post request that will send data from server to database");





// }
