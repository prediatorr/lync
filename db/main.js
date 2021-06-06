/*
    "main.js"
    "Database Connection File"
*/

require("dotenv").config();
const { Pool, Client } = require("pg");

const client = new Client({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

client.connect()
    .then(() => {
        console.log("Database Connection Successful!");
    })
    .catch((err) => {
        console.log("Database Connection Failed!");
        console.error(err);
    });

module.exports = client;