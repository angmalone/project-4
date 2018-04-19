import React, { Component } from "react";
//import PasswordList from "./PasswordList";

class Hacker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwords: ["hi"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({});

    //let first_guess = "hurt"
    //let second_guess = "shot"
    //let matchingLetters = 0;

    //function checkMatch() {
    //let i = 0;
    //if (first_guess.lenth !== second_guess.length ){
    //  alert("Word length should match!")
    //} else {
    //while (i < first_guess.length) {
    //if (first_guess.charAt(i) == second_guess.charAt(i)) {
    //matchingLetters++;
    //} else {
    //matchingLetters + 0
    //}
    //i++;
    //}
    //console.log(matchingLetters)
    //}]
    //checkMatch()
    //console.log(this);
  }

  render() {
    return (
      <div className="Terminal">
        <h2>Enter All Possible Passwords Below:</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="passwords" onChange={this.handleChange} />

          <input type="submit" value="SUBMIT" />
        </form>
        <h3>Possible Passwords:</h3>
      </div>
    );
  }
}

export default Hacker;
