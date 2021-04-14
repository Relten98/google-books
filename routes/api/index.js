const express = require("express");
const router = express.Router();

// Solely for the google books api. and my sanity when I am needing to troubleshoot later on.
const gbookRoutes = require("./books")
router.use("/books", gbookRoutes);

// yet another export to router, are you feeling it now, mister krabs?
module.exports = router
