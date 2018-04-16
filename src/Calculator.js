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

    this.calculateHappiness = this.calculateHappiness.bind(this);
  }

  calculateHappiness() {
    let totalHappiness =
      this.state.foodCount * 20 +
      this.state.waterCount * 20 +
      this.state.bedCount * 10 +
      this.state.shelteredBedCount * 10 +
      this.state.defenseCount * 20 / this.state.settlerCount;

    this.setState({
      totalHappiness
    });
  }

  subtractSettler() {
    let settlerCount = this.state.settlerCount - 1;

    this.setState({
      settlerCount
    });
    this.calculateHappiness();
  }

  addSettler() {
    let settlerCount = this.state.settlerCount + 1;

    this.setState({
      settlerCount
    });
    this.calculateHappiness();
  }

  subtractFood() {
    let foodCount = this.state.foodCount - 1;

    this.setState({
      foodCount
    });
    this.calculateHappiness();
  }

  addFood() {
    let foodCount = this.state.foodCount + 1;

    this.setState({
      foodCount
    });
    this.calculateHappiness();
  }

  subtractWater() {
    let waterCount = this.state.waterCount - 1;

    this.setState({
      waterCount
    });
    this.calculateHappiness();
  }

  addWater() {
    let waterCount = this.state.waterCount + 1;

    this.setState({
      waterCount
    });
    this.calculateHappiness();
  }

  subtractBed() {
    let bedCount = this.state.bedCount - 1;

    this.setState({
      bedCount
    });
    this.calculateHappiness();
  }

  addBed() {
    let bedCount = this.state.bedCount + 1;

    this.setState({
      bedCount
    });
    this.calculateHappiness();
  }

  subtractShelteredBed() {
    let shelteredBedCount = this.state.shelteredBedCount - 1;

    this.setState({
      shelteredBedCount
    });
    this.calculateHappiness();
  }

  addShelteredBed() {
    let shelteredBedCount = this.state.shelteredBedCount + 1;

    this.setState({
      shelteredBedCount
    });
    this.calculateHappiness();
  }

  subtractDefense() {
    let defenseCount = this.state.defenseCount - 1;

    this.setState({
      defenseCount
    });
    this.calculateHappiness();
  }

  addDefense() {
    let defenseCount = this.state.defenseCount + 1;

    this.setState({
      defenseCount
    });
    this.calculateHappiness();
  }

  render() {
    return (
      <div className="HappinessCalc">
        <h3># of settlers:</h3>
        <button onClick={this.subtractSettler}>&#8592;</button>
        <h3>{this.state.settlerCount}</h3>
        <button onClick={this.addSettler}>&#8594;</button>

        <h3>Amount of food:</h3>
        <button onClick={this.subtractFood}>&#8592;</button>
        <h3>{this.state.foodCount}</h3>
        <button onClick={this.addFood}>&#8594;</button>

        <h3>Amount of water:</h3>
        <button onClick={this.subtractWater}>&#8592;</button>
        <h3>{this.state.waterCount}</h3>
        <button onClick={this.addWater}>&#8594;</button>

        <h3># of beds:</h3>
        <button onClick={this.subtractBed}>&#8592;</button>
        <h3>{this.state.bedCount}</h3>
        <button onClick={this.addBed}>&#8594;</button>

        <h3># of sheltered beds:</h3>
        <button onClick={this.subtractShelteredBed}>&#8592;</button>
        <h3>{this.state.shelteredBedCount}</h3>
        <button onClick={this.addShelteredBed}>&#8594;</button>

        <h3>Amount of defense:</h3>
        <button onClick={this.subtractDefense}>&#8592;</button>
        <h3>{this.state.defenseCount}</h3>
        <button onClick={this.addDefense}>&#8594;</button>

        <h3>Total Happiness:</h3>
        <h3>{this.state.totalHappiness}</h3>
      </div>
    );
  }
}

export default Calculator;
