const db = require("../models");

// Specifically here to catch any error, so I am not spamming the same information, and giving myself some carpal tunnel
async function catcherror(){
    db.gBooks
    .catch(err => res.status().json(err))
}

// Finds one book
function findOne(req,res) {
    db.gBooks
    .findOne({id: req.params.id})
    .then(dbmodel => res.json(dbmodel))
    .catch(err => res.status(422).json(err))
}


// Finds EVERY book
function findAll(req, res) {
    db.gBooks
    .find(req.query)
    .sort({date: -1})
    .then(dbModel => res.json(dbModel))
// I have been told that I should do an sync 
    .catcherror()
}

// Stuff for saved books go below here

// Delete a book from the list
function remove(req,res) {
    db.gBooks
    .findById({_id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbmodel))
    .catcherror()
}

function save(requ, res) {
db.gBooks
.create(req.body)
.then(dbModel => res.json(dbmodel))
.catcherror()
}

module.exports = gbookController