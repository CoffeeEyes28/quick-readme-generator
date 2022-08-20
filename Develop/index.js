// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ['What is your GitHub username?', 'What is your email?', 'What is your projects name?', 'Please write a short description of your project.', 'What type of license does your project have?', 'What does the user need to know about using this repo?', 'What does the user need to know about contributing to the repo?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync('readme.md', fileName, (err) => {
    err ? console.log(err) : console.log('readme created!')
})

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'none']
        },
        {
            type: 'input',
            name: 'use',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[6]
        },
    ])
    .then((data) => {
     const fileName = generate(data)

    writeToFile(fileName, data)
    

    
      
       

    })
   
    
}

// Function call to initialize app
init();
