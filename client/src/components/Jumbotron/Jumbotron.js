import React from 'react';

// CSS
import "./style.css";

// Main function
function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-8 text-center myText">Google Books Search</h1>
                <br />
                <h2 className="text-center myText">Search for and save books of interest.</h2>
                <h5 className="text-center myText">Using the power of REACT!</h5>
                <br />
            </div>
        </div>
    )
}

export default Jumbotron;