import React from "react";
import PropTypes from "prop-types";
import Styles from "./Weight.module.css";

const weight = (props) => {
  let plate = null;
  switch (props.type) {
    case "50":
      plate = <div className={Styles.fifty}>50 lbs</div>;
      break;
    case "35":
      plate = <div className={Styles.thirtyFive}>35 lbs</div>;
      break;
    case "25":
      plate = <div className={Styles.twentyFive}>25 lbs</div>;
      break;
    case "10":
      plate = <div className={Styles.ten}>10 lbs</div>;
      break;
    default:
      plate = null;
      break;
  }
  return plate;
};

weight.PropTypes = {
  type: PropTypes.number.isRequired,
};

export default weight;
