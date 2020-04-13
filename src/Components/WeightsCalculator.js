import React, { Component } from "react";
import Weights from "./Weights";
import Styles from "./WeightCalculator.module.css";

class WeightCalculator extends Component {
  state = {
    weights: { 50: 0, 35: 0, 25: 0, 10: 0 },
    totalWeights: { 50: 2, 35: 2, 25: 4, 10: 6 },
    weight: 0,
    barWeight: 0,
  };

  weightCalculate = (e) => {
    if (e.target.value < 0) {
      return;
    }
    let weights = { 50: 0, 35: 0, 25: 0, 10: 0 };
    let totalWeights = { ...this.state.totalWeights };
    let currentWeight = this.weight.value - this.barWeight.value;
    Object.keys(totalWeights)
      .reverse()
      .map((key) => {
        for (let i = 0; i < totalWeights[key]; i++) {
          if (currentWeight - key * 2 >= 0) {
            weights[key] += 2;
            currentWeight -= key * 2;
          }
        }
      });

    this.setState({
      weights: weights,
      totalWeights: this.state.totalWeights,
      weight: this.weight.value,
      barWeight: this.barWeight.value,
    });
  };
  handleChange = (e) => {};
  render() {
    return (
      <>
        <div className={Styles.WeightCalculator}>
          <Weights weights={this.state.weights} />
        </div>
        <input
          type="text"
          placeholder="Weight"
          ref={(input) => (this.weight = input)}
        />
        <input
          type="text"
          placeholder="Bar Weight"
          ref={(input) => (this.barWeight = input)}
        />
        <p>{this.state.weight}</p>
        <p>{this.state.barWeight}</p>

        <button onClick={this.weightCalculate}>Calculate</button>
      </>
    );
  }
}

export default WeightCalculator;
