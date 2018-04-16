import React, { Component } from "react";
//import InputRange from "react-input-range";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      settlerCount: 0,
      foodCount: 0,
      waterCount: 0,
      bedCount: 0,
      shelteredBedCount: 0,
      defenseCount: 0,
      totalHappiness: 0
    };

    this.addSettler = this.addSettler.bind(this);
    this.subtractSettler = this.subtractSettler.bind(this);

    this.addFood = this.addFood.bind(this);
    this.subtractFood = this.subtractFood.bind(this);

    this.addWater = this.addWater.bind(this);
    this.subtractWater = this.subtractWater.bind(this);

    this.addBed = this.addBed.bind(this);
    this.subtractBed = this.subtractBed.bind(this);

    this.addShelteredBed = this.addShelteredBed.bind(this);
    this.subtractShelteredBed = this.subtractShelteredBed.bind(this);

    this.addDefense = this.addDefense.bind(this);
    this.subtractDefense = this.subtractDefense.bind(this);
  }

  render() {
    return (
      <div className="Calculator">
        <h3># of settlers:</h3>
        <button onClick={this.addSettler}>&#8592;</button>
        <h3>{this.state.settlerCount}</h3>
        <button onClick={this.subtractSettler}>&#8594;</button>

        <h3>Amount of food:</h3>
        <button onClick={this.addFood}>&#8592;</button>
        <h3>{this.state.foodCount}</h3>
        <button onClick={this.subtractFood}>&#8594;</button>

        <h3>Amount of water:</h3>
        <button onClick={this.addWater}>&#8592;</button>
        <h3>{this.state.waterCount}</h3>
        <button onClick={this.subtractWater}>&#8594;</button>

        <h3># of beds:</h3>
        <button onClick={this.addBed}>&#8592;</button>
        <h3>{this.state.bedCount}</h3>
        <button onClick={this.subtractBed}>&#8594;</button>

        <h3># of sheltered beds:</h3>
        <button onClick={this.addShelteredBed}>&#8592;</button>
        <h3>{this.state.shelteredBedCount}</h3>
        <button onClick={this.subtractShelteredBed}>&#8594;</button>

        <h3>Amount of defense:</h3>
        <button onClick={this.addDefense}>&#8592;</button>
        <h3>{this.state.defenseCount}</h3>
        <button onClick={this.subtractDefense}>&#8594;</button>

        <h3>Total Happiness:</h3>
        <h3>{this.state.totalHappiness}</h3>
      </div>
    );
  }
  addSettler() {
    let settlerCount = this.state.settlerCount - 1;

    this.setState({
      settlerCount
    });
  }

  subtractSettler() {
    let settlerCount = this.state.settlerCount + 1;

    this.setState({
      settlerCount
    });
  }

  addFood() {
    let foodCount = this.state.foodCount - 1;

    this.setState({
      foodCount
    });
  }

  subtractFood() {
    let foodCount = this.state.foodCount + 1;

    this.setState({
      foodCount
    });
  }

  addWater() {
    let waterCount = this.state.waterCount - 1;

    this.setState({
      waterCount
    });
  }

  subtractWater() {
    let waterCount = this.state.waterCount + 1;

    this.setState({
      waterCount
    });
  }

  addBed() {
    let bedCount = this.state.bedCount - 1;

    this.setState({
      bedCount
    });
  }

  subtractBed() {
    let bedCount = this.state.bedCount + 1;

    this.setState({
      bedCount
    });
  }

  addShelteredBed() {
    let shelteredBedCount = this.state.shelteredBedCount - 1;

    this.setState({
      shelteredBedCount
    });
  }

  subtractShelteredBed() {
    let shelteredBedCount = this.state.shelteredBedCount + 1;

    this.setState({
      shelteredBedCount
    });
  }

  addDefense() {
    let defenseCount = this.state.defenseCount - 1;

    this.setState({
      defenseCount
    });
  }

  subtractDefense() {
    let defenseCount = this.state.defenseCount + 1;

    this.setState({
      defenseCount
    });
  }

  calculateHappiness() {
    let totalHappiness = this.state.defenseCount + 1;

    this.setState({
      totalHappiness
    });
  }
}

export default Calculator;
