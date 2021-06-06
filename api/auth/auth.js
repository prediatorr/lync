/*
    "auth.js"
*/

const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {

    let payload = {
        status: 200,
    };
    res.status(200).json(payload);
});

module.exports = router;