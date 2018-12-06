// Include the inquerer npm package (Don't forget to run "npm install axios" in this folder first!)
var inquirer = require('inquirer');
var axios = require("axios");

// Created a series of questions
inquirer.prompt([

    {
        type: "input",
        name: "name",
        message: "Who are you???"
    },

    {
        type: "list",
        name: "doingWhat",
        message: "application would you like to use??",
        choices: ["spotify", "ombd", "bandsintown"]
    },

]).then(function (user) {

    // If the user guesses the password...
    if (user.doingWhat === "spotify") {

        console.log("==============================================");
        console.log("");
        console.log("Well Hello " + user.name);
        console.log("You can stay as long as you like.");
        console.log("");
        console.log("==============================================");

        inquirer.prompt([

            {
                type: "input",
                name: "input",
                message: "Which song would you like to look up?"
            },
        ])
            .then(function (user) {
                user.input
            }
            )
    }


    // If the user doesn't guess the password...
    else if (user.doingWhat === "ombd") {
        console.log("==============================================");
        console.log("");
        console.log("Well Hello " + user.name);
        console.log("You can stay as long as you like.");
        console.log("");
        console.log("==============================================");

        inquirer.prompt([
            {
                type: "input",
                name: "input",
                message: "Which movie would you like to look up?"
            },
        ])
            .then(function (user) {
                queryUrl = "http://www.omdbapi.com/?t=" + user.input + "&y=&plot=short&apikey=trilogy";
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
            }
            )
    }
    else {
        console.log("==============================================");
        console.log("");
        console.log("Well Hello " + user.name);
        console.log("You can stay as long as you like.");
        console.log("");
        console.log("==============================================");

        inquirer.prompt([
            {
                type: "input",
                name: "input",
                message: "Which band would you like to look up?"
            },
        ])
            .then(function (user) {
                user.input
            }
            )
    }

});