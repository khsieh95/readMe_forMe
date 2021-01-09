// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
    {
      type: "input",
      message: "Github Username: ",
      name: "github",
    },
    {
      type: "input",
      message: "Email: ",
      name: "email",
    },
  ])
  .then((data) => {
    // Use user feedback for... whatever!!
    console.log(data);
    const fileName = `${data.title}.md`;
    const template = `# ${data.title}

![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-green.svg) 

## Description
    ${data.description}
### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#tests)
- [Questions](#questions)

### Installation
    ${data.installation}
### Usage
    ${data.usage}
### Contribution
    ${data.contribution}
### Tests
    ${data.tests}
### Questions
    Github: ${data.github}
    Email: ${data.email}`;

    fs.writeFile(fileName, template, (err) =>
      err ? console.error(err) : console.log("Done!")
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
