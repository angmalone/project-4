import React, { Component } from "react";
import "./App.css";
import Calculator from "./Calculator";
import HackerNew from "./HackerNew";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="lol">
        <nav className="nav">
          <ul>
            <li className="title">
              <h2>PIP BOY 3 BILLION</h2>
            </li>
            <li>
              <Link to="/">
                <h2>Home</h2>
              </Link>
            </li>
            <li>
              <Link to="/terminal-hacker">
                <h2>Terminal Hacker</h2>
              </Link>
            </li>
            <li>
              <Link to="/happiness-calculator">
                <h2>Happiness Calculator</h2>
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Route path="/terminal-hacker" render={() => <HackerNew />} />
            <Route path="/happiness-calculator" render={() => <Calculator />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
