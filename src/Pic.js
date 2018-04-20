import React, { Component } from "react";
import VaultBoy from "./vaultboygreensmall.gif";

class Pic extends Component {
  render() {
    return (
      <div className="vb">
        <img src={VaultBoy} alt="vault boy" />
      </div>
    );
  }
}

export default Pic;
