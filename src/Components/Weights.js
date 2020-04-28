import React from "react";
import Weight from "./Weight";
import Styles from "./Weights.module.css";

const Weights = (props) => {
  let totalWeights = Object.keys(props.weights)
    .map((weightKey) => {
      return [...Array(props.weights[weightKey])].map((_, i) => {
        return <Weight key={weightKey + i} type={weightKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (totalWeights.length === 0) {
    totalWeights = <p>Please Enter a Weight</p>;
  }

  return (
    <div className={Styles.Weights}>
      <span>{totalWeights}</span>
    </div>
  );
};

export default Weights;
