import React, { Component } from "react";
//import InputRange from "react-input-range";

class Calculator extends Component {
  constructor(props) {
    super(props);

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

  subtractSettler = () => {
    //let settlerCount = this.state.settlerCount;
    this.setState(prevState => ({
      settlerCount: prevState.settlerCount - 1
    }));
  };

  addSettler = () => {
    //let settlerCount = this.state.settlerCount;
    this.setState(prevState => ({
      settlerCount: prevState.settlerCount + 1
    }));
  };

  subtractFood = () => {
    this.setState(prevState => ({
      foodCount: prevState.foodCount - 1
    }));
  };

  addFood = () => {
    this.setState(prevState => ({
      foodCount: prevState.foodCount + 1
    }));
  };

  subtractWater = () => {
    this.setState(prevState => ({
      waterCount: prevState.waterCount - 1
    }));
  };

  addWater = () => {
    this.setState(prevState => ({
      waterCount: prevState.waterCount + 1
    }));
  };

  subtractBed = () => {
    this.setState(prevState => ({
      bedCount: prevState.bedCount - 1
    }));
  };

  addBed = () => {
    this.setState(prevState => ({
      bedCount: prevState.bedCount + 1
    }));
  };

  subtractShelteredBed = () => {
    this.setState(prevState => ({
      shelteredBedCount: prevState.shelteredBedCount - 1
    }));
  };

  addShelteredBed = () => {
    this.setState(prevState => ({
      shelteredBedCount: prevState.shelteredBedCount + 1
    }));
  };

  subtractDefense = () => {
    this.setState(prevState => ({
      defenseCount: prevState.defenseCount - 1
    }));
  };

  addDefense = () => {
    this.setState(prevState => ({
      defenseCount: prevState.defenseCount + 1
    }));
  };

  //componentDidMount() {
  //this.calculateHappiness();
  //}

  //component did mount/component did update
  calculateHappiness() {
    let settlerCount = this.state.settlerCount;
    let foodCount = this.state.foodCount;
    let waterCount = this.state.waterCount;
    let bedCount = this.state.bedCount;
    let shelteredBedCount = this.state.shelteredBedCount;
    let defenseCount = this.state.defenseCount;

    let totalHappiness = parseInt(
      foodCount * 20 +
        waterCount * 20 +
        bedCount * 10 +
        shelteredBedCount * 10 +
        defenseCount * 20 / settlerCount
    );
    //this.state.foodCount * 20 +
    //this.state.waterCount * 20 +
    //this.state.bedCount * 10 +
    //this.state.shelteredBedCount * 10 +
    //this.state.defenseCount * 20 / this.state.settlerCount;

    this.setState({
      totalHappiness
    });
    console.log(settlerCount);
    console.log(this.state.foodCount);
    console.log(this.state.waterCount);
    console.log(this.state.bedCount);
    console.log(this.state.shelteredBedCount);
    console.log(this.state.defenseCount);
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
