// AXIOS TIME
import axios from "axios";

export default {

    gbooks: function (query) {
        return axios.get('')
    },
// Pulls a single book in the search
    getBook: function () {
        return axios.get("api/books/" + id);
    },

    // Retrieves every book in the search.
    getAllBooks: function () {
        return axios.get("api/books/");
    },

    // Deletes books
    deletebook: function(id){
        return axios.delete("api/books/" + id)
    },

    // SAves books
    saveBook: function(gbookdata){
        return axios.post("api/books/", gbookdata)
    }

}