import React, { Component } from "react";
import Weights from "./Weights";
import Styles from "./WeightsCalculator.module.css";

class WeightCalculator extends Component {
  state = {
    weights: { 50: 0, 35: 0, 25: 0, 10: 0 },
    totalWeights: { 50: 2, 35: 2, 25: 4, 10: 6 },
    weight: 0,
    barWeight: 0,
    showWeight: false,
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
      weight: this.weight.value - currentWeight,
      barWeight: this.barWeight.value,
    });
  };

  toggleWeights = () => {
    this.setState({ showWeight: !this.state.showWeight });
  };

  render() {
    return (
      <>
        <div className={Styles.WeightCalculator}>
          <Weights weights={this.state.weights} />
        </div>
        <span>
          <p>Weight: {this.state.weight}</p>

          <div className={Styles.userIn}>
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
            <button onClick={this.weightCalculate}>Calculate</button>
          </div>
          <div className={Styles.totals}>
            {Object.keys(this.state.weights).map((key) => {
              return (
                <li key={key}>
                  {key} lbs: {this.state.weights[key]}
                </li>
              );
            })}
          </div>
          <div className={Styles.plateDropdown}>
            <div className={this.state.showWeight ? Styles.out : Styles.in}>
              {Object.keys(this.state.totalWeights).map((key) => {
                return (
                  <li key={key}>
                    {key} lbs: {this.state.totalWeights[key]}
                  </li>
                );
              })}
            </div>
            <button onClick={this.toggleWeights}>v</button>
          </div>
        </span>
      </>
    );
  }
}

export default WeightCalculator;
