// AXIOS TIME

import Axios from "axios";

// Prevents me from needing to export, and import common information.
export default {

    // Pulls the full list of books, based entirely on user entry.
    gbooks: function (query) {
        return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    // Pulls a single book in the search
    getBook: function () {
        return Axios.get("api/books/" + id);
    },

    // Retrieves every book in the search.
    getAllBooks: function () {
        return Axios.get("api/books/");
    },

    // Deletes books
    deletebook: function (id) {
        return Axios.delete("api/books/" + id)
    },

    // Saves books to a list. YAY
    saveBook: function (gbookdata) {
        return Axios.post("api/books/", gbookdata)
    }

};