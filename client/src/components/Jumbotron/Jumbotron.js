import React from 'react';

// CSS
import "./style.css";

// Main function
function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                {/* GOD I SUCK AT THIS.. */}
                <div>
                <h1 className="display-4 text-center myTextheader">Google Book Buddy</h1>
                </div>
                <div>
                <h2 className="text-center myText">Search for, and save books of interest.</h2>
                <h5 className="text-center myText">Using the power of REACT!</h5>
                <br />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;