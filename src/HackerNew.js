import React, { Component } from "react";
//import PasswordList from "./PasswordList";

class HackerNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastWord: "",
      lastLikeness: 0,
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      choice5: "",
      choice6: "",
      choice7: "",
      choice8: "",
      choice9: "",
      choice10: "",
      choice11: "",
      predictions: []
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
    let guesses = [];
    let filteredGuesses = [];
    guesses.push(
      this.state.choice1,
      this.state.choice2,
      this.state.choice3,
      this.state.choice4,
      this.state.choice5,
      this.state.choice6,
      this.state.choice7,
      this.state.choice8,
      this.state.choice9,
      this.state.choice10,
      this.state.choice11
    );
    filteredGuesses = guesses.filter(Boolean);

    /*let filteredGuesses = ["largest", "library", "hissing", "parents", "vassals"];
let lastWord = "fishing";
let lastLikeness = 5;
let matchingLetters = 0;
let predictions = [];

function checkMatch() {
  for (let i = 0; i < filteredGuesses.length; i++) {
    if (filteredGuesses[i].length !== lastWord.length) {
      alert("Word lengths should match!");
    } else {
      let j = 0;
      while (j < filteredGuesses[i].length) {
        if (filteredGuesses[i].charAt(j) == lastWord.charAt(j)) {
            matchingLetters++;
            if (matchingLetters == lastLikeness) {
              predictions.push(filteredGuesses[i])
            }
        }
        j++;
      }
      console.log(matchingLetters);
      matchingLetters = 0
    }
  }
  console.log(predictions)
}
checkMatch();*/
    console.log(filteredGuesses);
  }

  render() {
    return (
      <div className="Terminal">
        <form onSubmit={this.handleSubmit}>
          <h3>Enter last selected password:</h3>
          <input type="text" name="lastWord" onChange={this.handleChange} />
          <h3>Enter the likeness:</h3>
          <input type="text" name="lastLikeness" onChange={this.handleChange} />
          <h3>Enter other password options:</h3>
          <input type="text" name="choice1" onChange={this.handleChange} />
          <input type="text" name="choice2" onChange={this.handleChange} />
          <input type="text" name="choice3" onChange={this.handleChange} />
          <input type="text" name="choice4" onChange={this.handleChange} />
          <input type="text" name="choice5" onChange={this.handleChange} />
          <input type="text" name="choice6" onChange={this.handleChange} />
          <input type="text" name="choice7" onChange={this.handleChange} />
          <input type="text" name="choice8" onChange={this.handleChange} />
          <input type="text" name="choice9" onChange={this.handleChange} />
          <input type="text" name="choice10" onChange={this.handleChange} />
          <input type="text" name="choice11" onChange={this.handleChange} />
          <br />
          <br />
          <input type="submit" value="SUBMIT" />
        </form>
        <h3>Possible Passwords:</h3>
      </div>
    );
  }
}

export default HackerNew;
