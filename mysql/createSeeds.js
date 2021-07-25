import mysql  from 'mysql2';
import fs  from 'fs';
import path  from 'path';
import {con}  from './db.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const seedPath = path.resolve(__dirname, 'seeds.sql');


// assign the content of the schema to an array of strings, and remove the semicolon
let seeds = fs.readFileSync(seedPath).toString().split(';');
seeds.forEach(seed => {
    if(seed){
    seed += ';'
    con.query(seed, (err, results)=>{
        if(err) throw err;
        console.log("1 record inserted");
    })}
});

con.end();
