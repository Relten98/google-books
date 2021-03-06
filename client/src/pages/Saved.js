// Core REACT
import React, { Component } from 'react'

// Components
import { Container } from "../components/Grid/Grid";

// THE ACTUAL COMPONENTS
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SavedList from "../components/SavedList/SavedList";

// API
import API from "../utils/api.js";

// Our important information
class Saved extends Component {

    state = {
        savedBooks: []
    }
    
// Checks it it mounted.
    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }


    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default Saved
