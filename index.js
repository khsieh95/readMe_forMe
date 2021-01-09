// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    /* Pass your questions in here */
    type: "input",
    message: "Project Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Short Project Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Instructions for Installation:",
    name: "installation",
  },
  {
    type: "input",
    message: "Instructions for Usage:",
    name: "usage",
  },
  {
    type: "input",
    message: "License Information (badge):",
    name: "license",
  },
  {
    type: "input",
    message: "Contribution Information: ",
    name: "contribution",
  },
  {
    type: "input",
    message: "Testing Information: ",
    name: "tests",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
