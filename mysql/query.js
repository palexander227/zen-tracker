// to hold functions for communicating with zen_db
const con = require('/db.js');

const listEmployees = () => {
con.query(
    'SELECT * FROM employee', 
        function(err, results){
            if(err){console.log(err)
            }else{return results};
        }
    );
};

const listDepartments = () => {
    con.query(
        'SELECT * FROM departments', 
        function(err, results){
            if(err){console.log(err)
            }else{return results};
        }
    );
};