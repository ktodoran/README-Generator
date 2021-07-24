const inquirer = require('inquirer');
const generateMarkdown = require('../Develop/utils/generateMarkdown');
const generateReadMe = require('../Develop/src/markdownTemplate');

//create validation function for required inquirer prompts
const inquirerValidate = input => {
    if(input){
        return true;
    }
    else{
        console.log("Please answer this question. It is required.");
        return false;
    }
};

// Array of questions (formatted for Inquirer) to ask user.
const questions = [
    {type: 'list', name: 'license', message: "Please choose a license for your project.", choices: [
        "Apache 2.0", "MIT", "GPL 3.0", "BSD 3.0", "Creative Commons 1.0", "None"
    ]},
    {type: 'checkbox', name: 'language', message: "What languages were used to build your project?", choices: [
        "HTML", "CSS", "JavaScript", "TypeScript", "Python", "C#", "C", "C++", "Ruby", "Java", "Shell"
    ]},
    {type: 'input', name: 'title', message: "What is the name of your project?", validate: inquirerValidate},
    {type: 'input', name: 'description', message: "Please provide a description of your project.", validate: inquirerValidate},
    {type: 'input', name: 'installation', message: "Please provide installation instructions for your project.", validate: inquirerValidate},
    {type: 'input', name: 'usage', message: "Please provide instructions your project's use.", validate: inquirerValidate},
    {type: 'input', name: 'contributing', message: "Please provide a guidelines for contributing to your project.", validate: inquirerValidate},
    {type: 'input', name: 'tests', message: "Please provide instructions for writing tests for your project.", validate: inquirerValidate},
    {type: 'input', name: 'github', message: "Please provide your GitHub username.", validate: inquirerValidate},
    {type: 'input', name: 'email', message: "Please provide your email address.", validate: inquirerValidate},
    {type: 'input', name: 'questions', message: "Please provide instructions for users to contact you with questions about your project.", validate: inquirerValidate}
    // need to add additional users question
    // need to add question to ask if project is deployed and what the deployment link is.
];

const promptQuestions = () => {
    return inquirer.prompt(questions)
    .then(answers => {
        return answers;
    });
};

// Function call to initialize app when node app is run
promptQuestions()
    .then(answers => {
        //pass answers to generate markdown function to generate the markdown syntax for the readme
        return generateMarkdown(answers);
    })
    .then(markdown => {
        //generate the readme and write the file to the dist folder
        return generateReadMe(markdown);
    })
    .then(genMarkDownResponse => {
        //log the success message from the readme generation
        console.log(genMarkDownResponse.message);
    })
    .catch(err => {
        //log the error message from the readme generation if it occurs
        console.log(err);
    });