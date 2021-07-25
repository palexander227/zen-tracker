// a boilerplate for a typical node-sql pairing
// import express to listen to the database
const express = require('express');
// import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false}));

app.use(express.json());

// connecting to database
const db = mysql.createConnection(
    {
       host: 'localhost',
       user: 'root',
       password: 'remaininthelight',
       database: 'zen_db'
    },
    console.log('zen_db connection established')
);


// here is where we write our queries 

db.query(
    'SELECT * FROM employee', 
    function(err, results){
        console.log(results);
    }
);


// default for any other request 
app.use((req, res) => {
    res.status(404).end();
})


app.listen(PORT, () => {
    console.log(`${PORT}; server is running.`)
});
