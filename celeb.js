require("dotenv").config();
var keys = require("./keys.js")
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
/*
var wiki = require('wikijs').default;
   wiki().page('List of most-followed Instagram accounts').then(page => page.summary()).then(console.log);
 */
function myInst(){
   var request = require("request");
   request({
    url: 'https://www.instagram.com/web/search/topsearch/?query=selenagomez',
    json: true
   }, function(error, response, body) {
    console.log(body.users[0].user.follower_count);
    console.log(body.users[0].user.full_name);
   });
}

//function for twitter to display 20 tweets
function myTweets() {

   //  variable to store my parameters
    var params = { screen_name: 'katyperry', count: 2 };
    
    client.get('statuses/user_timeline', params, function (error, tweets, response) {

        if (!error) {
            //display the whole tweet body from the response
            console.log(tweets);
          
            //return only the tweets and time created by disecting the tweets
            var all = tweets;
            for (var i = 0; i < all.length; i++) {
                var output = "\nMessage: " + all[i].text + "\nTime: " + all[i].created_at + "\nFollow: " + all[i].user.followers_count+ "\n: " + all[i].user.name;
                console.log(output);
               // If the code experiences any errors it will log the error to the console
               if (error) {
                 return console.log(error);
               }
            }
        }
        //display error if it occurs
        console.log(error);
    });
};
myTweets();
myInst();