// to hold arrays ofS questions for inqirer

//question of type 'list' 
// opening questions 
const q1 = {name: 'action',
            message: 'What would you like to do?',
            type: 'list',
            choices: [
                {
                    name: 'View all departments',
                    value: 1,
                    short: 'depts',                    
                },

                {
                    name: 'View all roles',
                    value: 2,
                    short: 'roles',                    
                },

                {
                    name: 'View all employees',
                    value: 3,
                    short: 'employees',                    
                },

                {
                    name: 'Add a department',
                    value: 4,
                    short: 'add dept',                    
                },

                {
                    name: 'Add a role',
                    value: 5,
                    short: 'add role',                    
                },

                {
                    name: 'Add an employee',
                    value: 6,
                    short: 'and emp',                    
                },

                {
                    name: 'Update an employee role',
                    value: 7,
                    short: 'update role',                    
                },

                {
                    name: 'Terminate',
                    value: 8,
                    short: 'exit',                    
                },
            ]
}

const q2 ={
    name: 'nameOfDepartment',
    message: 'What is the name of the new department?',
    type: 'input'
}

module.exports.q1 = q1;
module.exports.q2 = q2;
