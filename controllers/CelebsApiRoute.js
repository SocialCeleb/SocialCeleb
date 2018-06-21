var db = require("../models");

module.exports = function (app) {

  // GET route for getting all of celebs
  app.get("/api/celebs", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Celeb.findAll({ include: db.Popularity }).then(function (dbCeleb) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbCeleb);
    });
  });

}
