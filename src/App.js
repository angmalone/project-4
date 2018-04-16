import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator";
import Hacker from "./Hacker";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="Navigation">
          <h1>Project 3</h1>
          <Link to="/">Home</Link>
          <Link to="/terminal-hacker">Terminal Hacker</Link>
          <Link to="/happiness-calculator">Happiness Calculator</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/terminal-hacker" render={() => <Hacker />} />
            <Route path="/happiness-calculator" render={() => <Calculator />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
