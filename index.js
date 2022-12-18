// Declaring packages needed for application
const fs = require('fs')
const inquirer = require('inquirer')
const generateHtml = require('./generateHTML')

// Questions to be used in inquirer, to gather user input
function init(){
    inquirer.prompt([
        {
            type:'input'
        }
    ])
}