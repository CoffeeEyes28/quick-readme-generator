// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is your GitHub username?', 'What is your email?', 'What is your projects name?', 'Please write a short description of your project.', 'What type of license does your project have?', 'What does the user need to know about using this repo?', 'What does the user need to know about contributing to the repo?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            username: 'username',
            message: questions[0]
        }
    ])
}

// Function call to initialize app
init();
