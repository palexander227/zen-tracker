const mysql =  require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'remaininthelight',
    database: 'zen_db'
});

module.exports = con;
// const connect = () => {
// const { Client } = require('pg')
// const client = new Client({
//     host: 'localhost',
//     user: 'root',
//     password: 'remaininthelight',
//     database: 'zen_db'
// })
// await client.connect()
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()

