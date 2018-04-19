import React, { Component } from "react";

class PasswordList extends Component {
  showPasswords(passwords) {
    return <button key={passwords.value}>{passwords}</button>;
  }
  render() {
    const newPasswords = this.props.passwords;
    const submittedPasswords = newPasswords.map(this.showPasswords);
    return;
    <ul className="passwords">{submittedPasswords}</ul>;
  }
}

export default PasswordList;
