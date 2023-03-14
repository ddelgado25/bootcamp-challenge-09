// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    // Question #1
    {
        type: 'input',
        name: 'project title',
        message: 'Lets choose a title for your project:',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a title for your project.');
                return false;
            }
        }
    },
    
    // Question #2
    {
        type: 'input',
        name: 'file name',
        message: 'What do you want the name of your README file to be?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name you want for your README file');
                return false;
            }
        }
    },    

    // Question #3
    {
        type: 'input',
        name: 'description',
        message: 'Now lets add a brief description of what your project is about.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a brief description of your project');
                return false;
            }
        }
    },

    // Question #4
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation for your project?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please include installation instrcutions for your project');
                return false;
            }
        }
    },       

    // Question #5
    {
        type: 'input',
        name: 'usage',
        message: 'In a few words, Describe how to use your application.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe how to use your application.');
                return false;
            }
        }
    },

    // Question #6
    {
        type: 'input',
        name: 'contributng',
        message: 'What can others contribute towards your project?',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please describe how others can contribute towards your project.');
                return false;
            }
        }
    },
    
    // Question #7
    {
        type: 'input',
        name: 'tests',
        message: 'Provide exmaples on how toy use your application',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please provide exmaples on how toy use your application');
                return false;
            }
        }
    },

    // Question #8
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide a correct email address.');
                return false;
            }
        }
    },

    // Question #9
    {
        type: 'input',
        name: 'github',
        message: 'Whats is the link to your github user?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide correct link to your github user.');
                return false;
            }
        }
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
