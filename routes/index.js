// The router for our information
const express = require("express");

let router = express.Router();

// API stuff
const api = require("./api");
router.use("/api", api);

// const PATH = require("path");

// This is a default incase there are not API routes available.
router.use(function(req, res){
  console.log("Well shit, something went horribly wrong there.")
    // res.sendfile(PATH.join(__dirname, "../client/build/index.html"));
})

module.exports = router;