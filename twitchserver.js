var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
var PORT = process.env.PORT || 8080;
var app = express();

// Static directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// requires handlebars dependency
var exphbs = require("express-handlebars");
// permits
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var twitchRoutes = require("./controllers/twitch_controller.js")

app.use(twitchRoutes);


var Request = require("request");

Request.get("http://httpbin.org/ip", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});

// Start server 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });