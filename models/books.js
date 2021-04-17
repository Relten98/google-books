// Imports, as always
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, require: true},
    image: {type: String, require: true, dropDups: true,},
    link: {type: String, require: true},
    title: {},
    author: {},
    description: {}
    
})

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;