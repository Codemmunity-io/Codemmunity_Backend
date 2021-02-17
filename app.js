require('dotenv').config(); 
const express = require('express');
const app = express(); 
// environmental vars - make a file called .env and then put "PORT=(whatever port u want)" in it (without the quotes)
const port = process.env.PORT; 
const mysql = require('mysql');

// haven't created any credentials for the database yet
// this is just to get a boilerplate set up
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME1
})

app.get('/', (req, res) => {
    res.send('Hello world!').status(200);
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})