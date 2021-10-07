const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
        type: 'input',
        name: 'name',
        message: "What is your name? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your name here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter the title of your project."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your GitHub username."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your email address here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project. (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please write a short description of your project."
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have? (Required)",
        choices: ['Apache', 'Boost', 'BSD', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'SIL', 'Unlicense', 'Zlib', 'None'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: "What command should be run to install dependencies? (Required)",
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide instructions and examples for use. (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter the instructions and examples for the use of your project."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: "Please list your collaborators (including links to their Github profiles), any third-party assets used (list the creaters with links to their primary web presence), and any tutorials utilized (include the links here).",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter any credits here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please include any tests and examples for your application.",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter any tests or examples for your application."
            }
            return true;
        }
    },
    {
        type: 'confirm',
        name: 'contents',
        message: "Would you like your README.md to include a table of contents?",
    },
    {
        type: 'confirm',
        name: 'contributing',
        message: "Did you create an application or package that you would like others to contribute to?",
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(`./generated/${fileName}`, generateMarkdown(data), err => {
        if (err) {
            throw err
        };
        console.log('README has been successfully created!')
    });

};

function init() {
    inquirer.prompt(questions).then(function(data) {
        let fileName = "generatedREADMEFile.md"
        if (data.contributing === true) {
            inquirer.prompt([{
                type: 'input',
                name: 'contributorCovenant',
                message: "Please include contributing guidelines here.",
                default: '[Contributor Covenant](https://www.contributor-covenant.org/)'
            }, ]).then(value => {
                data.contributorCovenant = value.contributorCovenant
                writeToFile(fileName, data);
            })
        } else {
            writeToFile(fileName, data);
        }

    })
};

init();