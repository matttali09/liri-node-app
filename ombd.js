// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv.splice(2).join(" ");

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.

axios.get(queryUrl).then(
  function(response) {
      console.log("|^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^|");

    console.log("Release Title: " + response.data.Title);
    console.log("Runtime: " + response.data.Runtime);
    console.log("The Release Year was: " + response.data.Year);
    console.log("ImdbRating: " + response.data.imdbRating);
    console.log("Rated: " + response.data.Rated);
    console.log("Country produced: " + response.data.Country);
    console.log("Language of movie: " + response.data.Language);
    console.log("Plot of the Movie: " + response.data.Plot);
    console.log("Actors of the Movie: " + response.data.Actors);

    console.log("|______________________________________|");
  }
);