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
          <Link to="/">Home</Link>
          <Link to="/terminal-hacker">Terminal Hacker</Link>
          <Link to="/happiness-calculator">Happiness Calculator</Link>
          <Link to="/character-log">Character Log</Link>
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
