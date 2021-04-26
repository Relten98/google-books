// Imports out models
const db = require("../models");

// This is a fancy thing
module.exports = {
    findAll: function(req, res) {
      db.GoogleBooks
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // Finds one entry
    findOne: function(req, res) {
      db.GoogleBooks
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // SAves an entry
    save: function(req, res) {
      db.GoogleBooks
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // Removes an entry
    remove: function(req, res) {
      db.GoogleBooks
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };