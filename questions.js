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

const q3 = [
    {
        name: 'roleName',
        message: 'What is the name of the new role?',
        type: 'input'
    },

    {
        name: 'roleSalary',
        message: 'What is the salary of the new role?',
        type: 'input'
    },

    {
        name: 'roleDepartment',
        message: 'What is the department of the new role?',
        type: 'input'
    }
]

const q4 = [
    {
        name: 'firstName',
        message: 'What is the first name of the new employee?',
        type: 'input'
    },

    {
        name: 'lastName',
        message: 'What is the last name of the new employee?',
        type: 'input'
    },

    {
        name: 'employeeRole',
        message: 'What is the role of the new employee?',
        type: 'input'
    },

    {
        name: 'employeeManager',
        message: 'What is ID of the manager of the employee?',
        type: 'input'
    }
]

const q5 = [
    {
        name: 'newRoleTitle',
        message: 'What is the title of the new role?',
        type: 'input'
    },

    {
        name: 'newRoleSalary',
        message: 'What is the salary of the new role?',
        type: 'input'
    },

    {
        name: 'newRoleDepartment',
        message: 'What is the department ID for the new role?',
        type: 'input'
    }
]

const q6 = [
    {
        name: 'newEmployeeFirstName',
        message: 'What is the first name of the new employee?',
        type: 'input'
    },

    {
        name: 'newEmployeeLastName',
        message: 'What is the last name of the new employee?',
        type: 'input'
    },

    {
        name: 'newEmployeeRole',
        message: 'What is the role ID for the new employee?',
        type: 'input'
    },

    {
        name: 'newEmployeeManager',
        message: 'What is the manager ID for the new employee?',
        type: 'input'
    }
]










module.exports = {q1, q2, q3, q4, q5, q6}
