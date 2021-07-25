// to hold functions for communicating with zen_db
const con = require('./db.js');

const listEmployees = () => {
con.query(
    'SELECT * FROM employee', 
        function(err, results){
            if(err){console.log(err)
            }else{return results};
        }
    );
};

// const listDepartments = () => {
//     let res;
//      con.query(
//         'SELECT * FROM department', 
//         function(err, results){
//             // if(err){console.log(err)
//             // }else{return results};
//             res = results;
//         }
//     );setTimeout(() => {console.log(res);
        
//     }, 1000);
    
// };

const listDepartments = new Promise((resolve, reject) => {
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


module.exports.listDepartments = listDepartments;