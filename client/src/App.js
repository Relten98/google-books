// CORE REACT
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import "./App.css";

// Pages
import Home from "./pages/Home";
import Saved from "./pages/Saved";


// The thing that makes the react react
class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
