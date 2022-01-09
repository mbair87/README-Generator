// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    //what is your name
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
        } else {
            console.log('Your name is required.');
            return false;
        }
        }
      },

      //github user name 
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubNameInput => {
            if (githubNameInput) {
                return true;
            } else {
                console.log('Your GitHub username is required.');
                return false;
            }
        }
    },

    // email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email address?',
    },

    //projec name prompt
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
            return true;
        } else {
            console.log('A project title is required.');
            return false;
            }
        }
      },

//project description
{
    type: 'input',
    name: 'description',
    message: 'Include a description of the project (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('You need to include a project description.');
            return false;
        }
    }
},

 // choose license
 {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project (Required)',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('You must pick a license option for the project');
            return false;
        }
    }
},

//languages used 
{
    type: 'checkbox',
    name: 'languages',
    message: 'What did you use to build this project? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },

  //installation 
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project.',
  },
//usage 
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions for your project.',
  },
//contributions
  {
    type: 'input',
    name: 'contributions',
    message: 'Provide instructions on how to contribute to your project'
  },

  //test instructions
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions on how to test your project'
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){console.log(error)}) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        const markdown = generatePage(data)
        writeToFile('README.md', markdown)
    })
}

// Function call to initialize app
init();
