// Include the axios and moment npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
var moment = require("moment")

// Grab the bandName which will always be the third node argument.
var bandName = process.argv.splice(2).join(" ");

// Then run a request with axios to the bandsintown API with the bandspecified
var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

// This line is just to help us debug against the actual URL.

axios.get(queryUrl).then(
  function(response) {
// console.log(response);

    for (i = 0; i < response.data.length; i++) {
        console.log("|^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^|")
        console.log(`Artist Lineup: ${response.data[i].lineup.join(", ")}`)
        console.log(`Venue Name: ${response.data[i].venue.name}`)
        console.log(`Location: ${response.data[i].venue.city}, ${response.data[i].venue.region}, ${response.data[i].venue.country}`);
        console.log("Date Of Concert: " + moment(response.data[i].datetime).format("MM/DD/YYYY"))
        console.log("|______________________________________|")
        console.log("");      
    }
  });
