// to hold the inquirer scripts and prompts for inquirer
const inquirer = require('inquirer');
const questions = require('./questions.js');
const query = require('./mysql/query.js');
require('console.table');

let firstTime = true;

const chooseAction = () => {
    firstTime = false;
    inquirer.prompt(questions.q1)
        .then((ans) => {
            switch(ans.action){
                case 1: viewDepartments(); break;
                case 2: viewRoles(); break;
                case 3: viewEmployees(); break;
                case 4: askDept(); break;
                case 5: addRole(); break;
                case 6: addEmployee(); break;
                case 7: selectEmployeeToUpdate(); break;
                default: callItQuits(); break;
            };
        })
        .catch((err) => {
            console.log(err);
        });
}

if(firstTime){chooseAction()}

// helping functions for prompt responses
const viewDepartments = () => {      
    query.listDepartments()
         .then(res => console.table(res))
         .then(() => chooseAction());
}

const viewRoles = () => {      
    query.listRoles()
         .then(res => console.table(res))
         .then(() => chooseAction());
}

const viewEmployees = () => {      
    query.listEmployees()
         .then(res => console.table(res))
         .then(() => chooseAction());
}

const askDept = () => {
    inquirer.prompt(questions.q2)
    .then((ans) => {
    query.addDept(ans.nameOfDepartment)
         .then(res => console.log(res))
         .then(() => chooseAction());
    })
    .catch((err) => {
        console.log(err);
    });
}

const callItQuits = () => {
    query.closeConnection()
    .then(res => console.log(res))
    .then(() => {process.exit()})
}

// query for the employee field; uses the result to compose
// an array of choices to pass to inquirer to use as a dropdown
// --- this is kind of stupid since it could be possibly thousans of entries long 
const selectEmployeeToUpdate = () => {
    let choicesArr;
    query.listEmployees()
         .then(res => {
            choicesArr = res.map(r => {
                return `${r.first_name} ${r.last_name}` 
            })
         })
         .then(() => {
            inquirer.prompt({
                name: 'selectedEmployee',
                message: 'Select an employee to update',
                type: 'list',
                choices: choicesArr
            })
            .then(ans => console.log(ans))
         })





        //  .then(() => chooseAction());

}

// [
//     TextRow {
//       id: 1,
//       first_name: 'Paul',  
//       last_name: 'Johnson',
//       role_id: 1,
//       manager_id: 1        
//     } 
// ]


