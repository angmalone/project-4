import React, { Component } from "react";
import "./App.css";
import Calculator from "./Calculator";
import CharacterLog from "./CharacterLog";
import Hacker from "./Hacker";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="Navigation">
          <h1>Project 4</h1>
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/terminal-hacker">
            <h3>Terminal Hacker</h3>
          </Link>
          <Link to="/happiness-calculator">
            <h3>Happiness Calculator</h3>
          </Link>
          <Link to="/character-log">
            <h3>Character Log</h3>
          </Link>
        </nav>
        <main>
          <Switch>
            <Route path="/terminal-hacker" render={() => <Hacker />} />
            <Route path="/happiness-calculator" render={() => <Calculator />} />
            <Route path="/character-log" render={() => <CharacterLog />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
