/*
    "index.js"
    API Entrypoint
    Every request handler have 'payload' variable 
    used to store response data.
*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    let payload = {
        status: 200,
    };
    res.status(200).json(payload);
});

module.exports = router;