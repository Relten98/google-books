// Important base imports
import React, { Component } from "react";
import API from "../utils/api";
import Results from "../components/results"

// React visual components
import Container from "../components/Container";
import api from "../utils/api";

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
        // Just in case something goes wrong in the process.
        .catch(err => console.log("Something went wrong: "err));
    };

saveBook = currentBook => {
    API.saveBook({
        - USE BOOK ARRAY -
    })
}

// This is for the forms, along with preventing page default.
    Inputchange = event => {
        let {name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitForm = event => {
        event.preventDefault();
        this.searchBooks();
    }

}