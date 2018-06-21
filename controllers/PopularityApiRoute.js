var db = require("../models");

module.exports = function (app) {
    console.log("start here")
    app.get("/api/popularity", function (req, res) {

        db.Popularity.findAll({

        }).then(function (dbPopularity) {
            res.json(dbPopularity);




        })

    })
}