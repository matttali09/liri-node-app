// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var Spotify = require('node-spotify-api');
var axios = require("axios");
 

 
axios.get(queryUrl).then(
    function(response) {
      console.log("Release Year: " + response.data.Year);
    }
);