// to hold functions for communicating with zen_db
const con = require('./db.js');

const listDepartments = () =>{
    return new Promise((resolve, reject) => {
        con.query(
            'SELECT * FROM department',
            (err, results) => {
                if(err){
                    reject(err)
                }
                resolve(results)
            }
        )
        ;
    })
}

const listRoles = () => {
    return new Promise((resolve, reject) => {
        con.query(
            'SELECT * FROM role',
            (err, results) => {
                if(err){
                    reject(err)
                }
                resolve(results)
            }
        )
        ;
    })
}

const listEmployees = () => {
    return new Promise((resolve, reject) => {
        con.query(
            'SELECT * FROM employee',
            (err, results) => {
                if(err){
                    reject(err)
                }
                resolve(results)
            }
        )
        ;
    })
}

// functions to add to  and update the database

const addDept = (val) => {
    return new Promise((resolve, reject) => {
        con.query(
            'INSERT INTO department (name) VALUES (?)', [val],
            (err, results) => {
                if(err){
                    reject(err)
                }
                resolve(`Added new department ${val}`)
            }
        )
        ;
    })
}

const addRole = (t, s, d) => {
    return new Promise((resolve, reject) => {
        con.query(
            'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [t, s, d],
            (err, results) => {
                if(err){
                    reject(err)
                }
                resolve(`Added new role ${t}`)
            }
        )
        ;
    })
}

const addEmployee = (f, l, r, m) => {
    return new Promise((resolve, reject) => {
        con.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [f, l, r, m],
            (err, results) => {
                if(err){
                    reject(err)
                }
                resolve(`Added new employee ${f} ${l}`)
            }
        )
        ;
    })
}





const updateRole = (empName, empRole) => {
    return new Promise((resolve, reject) => {
        con.execute(
            'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?', 
                [empRole, empName.split(' ')[0], empName.split(' ')[1]],
            (err, results) => {
                if(err){
                    reject(err)
                }
                resolve(`Updated ${empName} with role ${empRole}.`)
            }
        )
        ;
    })
}

// this function is called to terminate the session and return the console

const closeConnection = () => {
    return new Promise((resolve, reject) => {
        // 
        resolve('Connection closed.');
    })
}


module.exports.listDepartments = listDepartments;
module.exports.listRoles = listRoles;
module.exports.listEmployees = listEmployees;
module.exports.addDept = addDept;
module.exports.closeConnection = closeConnection;
module.exports.updateRole = updateRole;
module.exports.addRole = addRole;
module.exports.addEmployee = addEmployee;
