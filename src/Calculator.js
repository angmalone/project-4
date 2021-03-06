import React, { Component } from "react";
import subtract from "./pics/subtractsmall.png";
import add from "./pics/addsmall.png";
import VaultBoy from "./pics/vaultboygreensmall.gif";
import "./Calculator.css";

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
    this.setState(prevState => {
      return {
        settlerCount: prevState.settlerCount - 1
      };
    });
  };

  addSettler = () => {
    this.setState(prevState => {
      return {
        settlerCount: prevState.settlerCount + 1
      };
    });
  };

  subtractFood = () => {
    this.setState(prevState => {
      return {
        foodCount: prevState.foodCount - 1
      };
    });
  };

  addFood = () => {
    this.setState(prevState => {
      return {
        foodCount: prevState.foodCount + 1
      };
    });
  };

  subtractWater = () => {
    this.setState(prevState => {
      return {
        waterCount: prevState.waterCount - 1
      };
    });
  };

  addWater = () => {
    this.setState(prevState => {
      return {
        waterCount: prevState.waterCount + 1
      };
    });
  };

  subtractBed = () => {
    this.setState(prevState => {
      return {
        bedCount: prevState.bedCount - 1
      };
    });
  };

  addBed = () => {
    this.setState(prevState => {
      return {
        bedCount: prevState.bedCount + 1
      };
    });
  };

  subtractShelteredBed = () => {
    this.setState(prevState => {
      return {
        shelteredBedCount: prevState.shelteredBedCount - 1
      };
    });
  };

  addShelteredBed = () => {
    this.setState(prevState => {
      return {
        shelteredBedCount: prevState.shelteredBedCount + 1
      };
    });
  };

  subtractDefense = () => {
    this.setState(prevState => {
      return {
        defenseCount: prevState.defenseCount - 1
      };
    });
  };

  addDefense = () => {
    this.setState(prevState => {
      return {
        defenseCount: prevState.defenseCount + 1
      };
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.settlerCount !== this.state.settlerCount ||
      nextState.waterCount !== this.state.waterCount ||
      nextState.foodCount !== this.state.foodCount ||
      nextState.bedCount !== this.state.bedCount ||
      nextState.shelteredBedCount !== this.state.shelteredBedCount ||
      nextState.defenseCount !== this.state.defenseCount ||
      nextState.totalHappiness !== this.state.totalHappiness
    );
  }

  componentWillUpdate() {
    this.calculateHappiness();
    console.log(this);
  }

  calculateHappiness() {
    let {
      settlerCount,
      foodCount,
      waterCount,
      bedCount,
      shelteredBedCount,
      defenseCount
    } = this.state;

    this.setState(prevState => {
      return {
        totalHappiness:
          (foodCount * 20 +
            waterCount * 20 +
            bedCount * 10 +
            shelteredBedCount * 10 +
            defenseCount * 20) /
          settlerCount
      };
    });
  }

  render() {
    console.log(this.state.totalHappiness);
    return (
      <div className="wrap">
        <div className="happiness">
          <ul>
            <div className="liwrap">
              <li>
                <h3># of settlers:</h3>
                <div className="subtract">
                  <button onClick={this.subtractSettler}>
                    <img src={subtract} alt="subtract" />
                  </button>
                </div>
                <div className="number">
                  <h3>{this.state.settlerCount}</h3>
                </div>
                <div className="add">
                  <button onClick={this.addSettler}>
                    <img src={add} alt="add" />
                  </button>
                </div>
              </li>
            </div>
            <div className="liwrap">
              <li>
                <h3>Amount of food:</h3>
                <div className="subtract">
                  <button onClick={this.subtractFood}>
                    <img src={subtract} alt="subtract" />
                  </button>
                </div>
                <div className="number">
                  <h3>{this.state.foodCount}</h3>
                </div>
                <div className="add">
                  <button onClick={this.addFood}>
                    <img src={add} alt="add" />
                  </button>
                </div>
              </li>
            </div>
            <div className="liwrap">
              <li>
                <h3>Amount of water:</h3>
                <div className="subtract">
                  <button onClick={this.subtractWater}>
                    <img src={subtract} alt="subtract" />
                  </button>
                </div>
                <div className="number">
                  <h3>{this.state.waterCount}</h3>
                </div>
                <div className="add">
                  <button onClick={this.addWater}>
                    <img src={add} alt="add" />
                  </button>
                </div>
              </li>
            </div>
            <div className="liwrap">
              <li>
                <h3># of beds:</h3>
                <div className="subtract">
                  <button onClick={this.subtractBed}>
                    <img src={subtract} alt="subtract" />
                  </button>
                </div>
                <div className="number">
                  <h3>{this.state.bedCount}</h3>
                </div>
                <div className="add">
                  <button onClick={this.addBed}>
                    <img src={add} alt="add" />
                  </button>
                </div>
              </li>
            </div>
            <div className="liwrap">
              <li>
                <h3># of sheltered beds:</h3>
                <div className="subtract">
                  <button onClick={this.subtractShelteredBed}>
                    <img src={subtract} alt="subtract" />
                  </button>
                </div>
                <div className="number">
                  <h3>{this.state.shelteredBedCount}</h3>
                </div>
                <div className="add">
                  <button onClick={this.addShelteredBed}>
                    <img src={add} alt="add" />
                  </button>
                </div>
              </li>
            </div>
            <div className="liwrap">
              <li>
                <h3>Amount of defense:</h3>
                <div className="subtract">
                  <button onClick={this.subtractDefense}>
                    <img src={subtract} alt="subtract" />
                  </button>
                </div>
                <div className="number">
                  <h3>{this.state.defenseCount}</h3>
                </div>
                <div className="add">
                  <button onClick={this.addDefense}>
                    <img src={add} alt="add" />
                  </button>
                </div>
              </li>
            </div>
            <h3>Total Happiness:</h3>
            <h2>{this.state.totalHappiness}</h2>
          </ul>
        </div>

        <div className="pic">
          <img src={VaultBoy} alt={VaultBoy} />
        </div>
      </div>
    );
  }
}

export default Calculator;
