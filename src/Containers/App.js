import React from "react";
import "./App.css";
import WeightCalculator from "../Components/WeightsCalculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weight Lifting Plate Calculator</p>
      </header>
      <WeightCalculator />
    </div>
  );
}

export default App;
