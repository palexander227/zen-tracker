const mysql =  require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'remaininthelight',
    database: 'zen_db'
});

module.exports = con;