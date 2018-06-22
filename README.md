# SocialCeleb

Purpose


Obstacles 

  The MVC architecture of SocialCeleb required data from the given APIs to flow in one direction with addition to a .js file that we called "celebs.js".  (Provide a visual example along with explaination).

  "celebs.js" is the data munger which provided instructions on how to store the data into the database from the API.  This was an unpredictable dimension to the project because we are accustomed to the typical flow of data going from the client to server to controller and then either to the views or model to access database.  
  
  In this project, the MVC architecture required a one way flow (horizontal) of calling information.  For example, the user would request the data to the server.  From there, the data APIs would send the info to the database by the directions of a data munger js file that enabled the data to be stored.  

This unforeseen obstacle resulted with empty data entries, showing that our connection to the database is successful, but the storage of data lacked specific instructions on how to be stored in the database. 

Moreoever, the munger js file permitted successful communication between our two tables to store data. On table 1, held data for the id and the celebrity name. On table 2, we used a foreign key, using the id from table one, to allow us to expand our dataset by placing the type of social media and the number of followers.  

Challenges

1. 
Some challenges experienced during this project resulted in dropping the Facebook API to call information because of the recent Facebook Privacy compromise.  The main issue using the Facebook API is the limited functionality of the API in regards to accessing other users and profile information.  However, in the beginning stage, the information from the Facebook API require the user of SocialCeleb to sign into their Facebook account reqlinquishing private data.  This is an issue because this limits the app's ability to call data of other users.  In conclusion, our efforts shift from configuring the Facebook API to other social media APIS (twitter, instagram, twitch). 

2. We added (app) at the end of the require method on the server.js file for the "HtmlRoute.js", "CelebsApiRoute.js", and "PopularityApiRoute.js".  For example, require("./controllers/HtmlRoute.js")(app).  What we discovered was the given .js file was not running resulting in an empty array when called through node.  Therefore, adding (app) allowed the code to initiate the file to directly grab the data we input and are currently inputting to the database, and retrieve it on the backend through terminal.


logic

1. 
Ensuring for DRY code, when calling data through the twitter API, we created an array with three celebrities and  looped through them in the query search function.  We placed the loop before the request for twitter and hope we can apply this same strategy for instagram. 

Limitations

1.
The Facebook API required the user to sign in.  Due to recent legal events regarding Facebook and privacy, a stringent review process to access the Facebook API is in place.  The review process restricted the potential of the Facebook API to collect likes, comments, and shares.  

2. 
Configuring a metric system that assigns a value on likes, favorites, comments, followers, and subscriptions as a true indicator of popularity.  For example, a subscriber on Twitch holds more value because Twitch subscribers pay to watch an individual's live stream.  


Stretch goal

We would ike to expand the number of social media platforms the web application calls.  For example, implementing FB API (if regulations became lenient), Snapchat, Pintrest, Twitch, and future relevant platforms.  Futhermore, gather specific user data such as a user's post with the highest likes. 

This is useful for the number of growing number of influencers and public figures to accurately grab their real time data to leverage and market to bigger companies in order to get paid for product placement and reach audiences. 

Follow up with instagram API that lacked proper documentation online, but was driven more through a call back? - Follow up with monica more on this to clarify. 

In the future, a necessary key feature of a metric system assigning number values to likes, favorites, comments, followers, and subscriptions as reliable indicator of popularity based on monetary incentives.  






HTML materialze and foundation. 

celebs.js was the data munger - Instructed the data from the API by giving specific instructions on how to store the data into the database from the API. 
- This was an unpredictable dimension to the project because we are accustomed to the typical flow of data going from the client to server to controller and then either to the views or model to access database.  In this project, the MVC architecture required a one way flow (horizontal) of calling information.  For example, the user would request the data to the server.  From there, the data APIs would send the info to the database by the directions of a data munger js file that enabled the data to be stored.  

This was an issue because prior to this addition of the data munger js file, the data entries would register (hit) however, the raw data from the APIs did not appear.

Moreoever, the munger js file permitted successful communication between our two tables to store data. On table 1, held data for the id and the celebrity name. On table 2, we used a foreign key, using the id from table one, to allow us to expand our dataset by placing the type of social media and the number of followers.  


