// Imports, as always
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gbookSchema = new Schema({
    id: {type: String, require: true},
    image: {type: String, require: true, dropDups: true,},
    link: {type: String, require: true},
    title: {},
    author: {},
    description: {}
    
})

const gBooks = mongoose.model("gBooks", gbookSchema);

module.exports = gBooks;