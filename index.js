// TODO: Include packages needed for this application
const fs=require('fs');
const inquirer=require('inquirer');
const generateMarkdown=require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: ' What is the title of your project?',
        name:'title',

    },
    {
        type: 'input',
        message: 'Write a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation instruction to run this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is the contribution guideline for your project?',
        name: 'contributing',
    },
    {
    type: 'input',
    message: 'What is the test instruction for your project?',
    name: 'test',
    },
    {
        type: 'list',
        message: 'What is the usage information for your project?',
        choices: ['none','Apache License 2.0','Boost Software License 1.0','BSD 2-Clause License','BSD 3-Clause License','GNU General Public License v.3.0.', 'MIT'],
        name:'license',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error) =>
        error? console.log(error):console.log('Successfully generated '+fileName+ ' !'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        
        //make sure readme title has capitalized first letter
        let dataTitle=data.title.split(' ');
        let newTitle='';
        for (let word of dataTitle){
            word=word[0].toUpperCase()+word.substr(1);
            console.log(word);
            newTitle +=word;
        }
        
        let fileName='README_'+newTitle+'.md';
        writeToFile(fileName, generateMarkdown(data));
    });
}

// Function call to initialize app
init();

