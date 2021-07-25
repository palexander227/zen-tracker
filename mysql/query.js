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

const addEmployee = () => {
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

const addRole = () => {
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

const updateRole = () => {
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
