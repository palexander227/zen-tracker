import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'remaininthelight',
    database: 'zen_db'
});

export {con};