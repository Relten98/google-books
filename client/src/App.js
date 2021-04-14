// basic import for react to do.... react things
import React, {Component} from "react";

// This is what is going to let our page do the magic
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// React pages for the route go here
import Homepage from "./pages/Homepage"
import Savedpage from "./pages/Savedpage"

// CSS Information
import './App.css';

function App() {
  return (
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/savedpage" component={Savedpage} />
    </Switch>
  </div>
</Router>
  );
}

export default App;
