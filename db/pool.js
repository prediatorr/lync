/*
    "main.js"
    "Database Connection File"
*/

require("dotenv").config();
const { Pool } = require("pg");
const { connect } = require("../api/auth/auth");

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

const Connect = async () => {
    try {
        await pool.connect();
        console.log("Database Connection Successful!");
    } catch (err) {
        console.log("Database Connection Failed!");
        console.error(err);
    }
    
}
Connect();


module.exports = pool;