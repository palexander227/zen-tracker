// import mysql  from 'mysql2';
// import fs  from 'fs';
// import path  from 'path';
// import {con}  from './db.js';
// import { fileURLToPath } from 'url';

//const __dirname = path.dirname(fileURLToPath(import.meta.url));

//const schemaPath = path.resolve(__dirname, 'schema.sql');

const fs = require('fs');
const con = require('./db.js');

// assign the content of the schema to an array of strings, and remove the semicolon
let schemas = fs.readFileSync('./mysql/schema.sql').toString().split(';');
schemas.forEach(schema => {
    if(schema){
    schema += ';'
    con.query(schema, (err, results, fields)=>{
        if(err){console.log(err)}
        if(results){console.log(results)}
    })}
})

con.end();
