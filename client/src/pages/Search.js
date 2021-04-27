// Important base imports
import React, { Component } from "react";

// API
import API from "../utils/api.js";

class Main extends Component {

    state = {
        books: [],
        search: ""
    };

    findBooks = () => {
        api.googlebooks(this.state.search)
            .then(res => {
                this.setState({
                    books: res.data.items,
                    search: ""
                })
            })
            // All to prevent a potential page nuke
            .catch(err => console.log("Something went wrong: ", err));
    };

    // This is for the forms, along with preventing page default.
    Inputchange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // Just saves the book. WHOOPDEEDOOO
    saveBook = currentBook => {
        API.saveBook({})
    }

    // Important for handling form submissions
    submitForm = event => {
        event.preventDefault();
        this.searchBooks();
    }

}