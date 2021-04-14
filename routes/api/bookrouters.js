// imports express
const express = require("express");

// Our router. I wonder if importing both as a single const is a better idea
const router = express.Router();

// The blessed controller
const gbookController = require("../../controllers/gbookController");

// The routes
router.route("/")
.get(gbookController.findAll)

// Saves... duh.
.post(gbookController.save)

// information follows the route of "/api/book/:id"
router.route("/:id")

// The book search function
.get(gbookController.findOne)

// For deletion purposes
.delete(gbookController.remove)

// Export to be called in the many other files that are flooding the directory.
module.exports = router