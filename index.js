// to hold the inquirer scripts and prompts for inquirer
const inquirer = require('inquirer');
const questions = require('./questions.js');

inquirer.prompt(questions.q1)
    .then((ans) => {
        console.log(ans);
    })
    .catch((err) => {
        console.log(err);
    });

