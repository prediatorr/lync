/*
    "server.js"
    Main Scirpt
    Run server using this script
    Termninal Command: "npm start"    
*/

// Module Imports
require("dotenv").config();
const express = require("express");
const client = require("./db/main");
const app = express();

// Request Body Persers (JSON Body, URLEncodedBody) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.use("", require("./api/index"));
app.use("auth/", require("./api/auth/auth"));

// Server Listener
app.listen(process.env.SERVER_PORT, () => {
    console.log("Server Is Running On http://localhost:8000");
    client.query("SELECT NOW()", (err, res) => {
        console.log(err, "\n", res.rows[0]);
    })
});