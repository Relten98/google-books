// The important core imports to get our up functioning.
import React, { Component } from "react";
import API from "../utils/api";

// React page elements
import { container } from "../components/container"
import Saveddata from "../components/Saveddata";

class Saved extends Component {

    state = {
        savedbooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deletebook(currentBook.id)
            .then(res => {
                console.log("Book yeeted from list")
                this.getBooks()
            })
            .catch(err => {
                console.log("SOMETHING WENT WRONG HERE, MAMAMIAAAAA", err);
            })
    }

    getBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({
                    savedbooks: res
                })
                console.log("book results:", res);
            })
            .catch(err => {
                console.log("error:", err)
            })
    }
    render() {
        return (
            <div>
                -TO DO-
            </div>
        )
    }
}