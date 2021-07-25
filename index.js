// to hold the inquirer scripts and prompts for inquirer
const inquirer = require('inquirer');
const questions = require('./questions.js');
const query = require('./mysql/query.js');

inquirer.prompt(questions.q1)
    .then((ans) => {
        switch(ans.action){
            case 1: viewDepartments(); break;
            case 2: viewRoles(); break;
            case 3: viewEmployees(); break;
            case 4: addDept(); break;
            case 5: addRole(); break;
            case 6: addEmployee(); break;
            default: updateRole()
        };
    })
    .catch((err) => {
        console.log(err);
    });

// helping functions for prompt responses

const printTable = val => {
    let res = table.getTable([val]);
    console.log(res);
    // console.table(JSON.stringify(val));
};

const viewDepartments = () => {
      
    query.listDepartments.then(res => console.log(res));  
    // console.log(res);
}