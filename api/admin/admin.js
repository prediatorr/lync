/*
    "admin1.js"
    endpoints specific to admin! 
*/

const express = require("express");
const LyncDatabasePG = require("../../db/lyncdbpg");
const router = express.Router();

let db = new LyncDatabasePG();

router.get("/db/create/auth/user", async (req, res) => {
    let command_status = await db.CreateTableAuthUser();
    console.log("Command Status: \t", command_status);
    res.status(200).json({
        status: 200,
        commandStatus: command_status,    
    });
});

router.get("/db/create/auth/et", async (req, res) => {
    let command_status = await db.CreateTableAuthExpiredTokens();
    console.log("Command Status: \t", command_status);
    res.status(200).json({
        status: 200,
        commandStatus: command_status,    
    });
});

router.get("/db/reload", async (req, res) => {
    let command_status = await db.Reload();
    res.status(200).json({
        status: 200,
        commandStatus: command_status,    
    });
})

module.exports = router;