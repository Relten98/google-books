// Required module
import axios from "axios";

export default {

    // Retrieves Google books
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Retrieves a single book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Gets EVERY book from the DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Deletes book with the given ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
    // Saves book to the DB
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
};