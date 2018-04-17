import React, { Component } from "react";

class Hacker extends Component {
  constructor() {
    super();
    this.state = {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
      p10: "",
      p11: "",
      p12: "",
      choices: [""]
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
    this.setState({
      p1: this.state.p1,
      p2: this.state.p2,
      p3: this.state.p3,
      p4: this.state.p4,
      p5: this.state.p5,
      p6: this.state.p6,
      p7: this.state.p7,
      p8: this.state.p8,
      p9: this.state.p9,
      p10: this.state.p10,
      p11: this.state.p11,
      p12: this.state.p12,
      p13: this.state.p13,
      p14: this.state.p14
    });
    //const passwords = this.state.passwords.map((password, index)
    //console.log(this.state);
  }

  render() {
    return (
      <div className="Terminal">
        <form onSubmit={this.handleSubmit}>
          Password 1:
          <input type="text" name="p1" onChange={this.handleChange} />
          Password 2:
          <input type="text" name="p2" onChange={this.handleChange} />
          Password 3:
          <input type="text" name="p3" onChange={this.handleChange} />
          Password 4:
          <input type="text" name="p4" onChange={this.handleChange} />
          Password 5:
          <input type="text" name="p5" onChange={this.handleChange} />
          Password 6:
          <input type="text" name="p6" onChange={this.handleChange} />
          Password 7:
          <input type="text" name="p7" onChange={this.handleChange} />
          Password 8:
          <input type="text" name="p8" onChange={this.handleChange} />
          Password 9:
          <input type="text" name="p9" onChange={this.handleChange} />
          Password 10:
          <input type="text" name="p10" onChange={this.handleChange} />
          Password 11:
          <input type="text" name="p11" onChange={this.handleChange} />
          Password 12:
          <input type="text" name="p12" onChange={this.handleChange} />
          Password 13:
          <input type="text" name="p13" onChange={this.handleChange} />
          Password 14:
          <input type="text" name="p14" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <h3>Possible Passwords:</h3>
      </div>
    );
  }
}

export default Hacker;
