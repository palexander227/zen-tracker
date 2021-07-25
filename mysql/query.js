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
        con.end();
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
        con.end();
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
        con.end();
    })
}




module.exports.listDepartments = listDepartments;
module.exports.listRoles = listRoles;
module.exports.listEmployees = listEmployees;

// Notes for later:
// const addDepartment = (newDept) => {

//     return new Promise((resolve, reject) => {
//         con.execute(
//             'INSERT INTO department (name) VALUES (??, ??)',
//             [newDept, otherThing],
            
//             (err, results) => {
//                 if(err){
//                     reject(err)
//                 }
//                 resolve(`added new department ${newDept}`)
//             }
//             )
//         })
// }
