// Declaring packages needed for application
const fs = require('fs')
const inquirer = require('inquirer')
const generateHtml = require('./generateHTML')

// Object constructors for roles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Questions to be used in inquirer, to gather user input
function init(){
    inquirer.prompt([
        {
            type:'input'
        }
    ])
}