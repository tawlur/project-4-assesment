import React from "react";
import "./CircleSelector.css";

function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      <button
        onClick={() => props.handleColorChange(1)}
        className={props.selectedCircle === 1 ? "selected" : ""}
      >
        {props.selectedCircle === 1 ? "Circle 1 Selected" : "Select Circle 1"}
      </button>
      <button
        onClick={() => props.handleColorChange(2)}
        className={props.selectedCircle === 2 ? "selected" : ""}
      >
        {props.selectedCircle === 2 ? "Circle 2 Selected" : "Select Circle 2"}
      </button>
      <button
        onClick={() => props.handleColorChange(3)}
        className={props.selectedCircle === 3 ? "selected" : ""}
      >
        {props.selectedCircle === 3 ? "Circle 3 Selected" : "Select Circle 3"}
      </button>
      <button
        onClick={() => props.handleColorChange(4)}
        className={props.selectedCircle === 4 ? "selected" : ""}
      >
        {props.selectedCircle === 4 ? "Circle 4 Selected" : "Select Circle 4"}
      </button>
    </div>
  );
}
export default CircleSelector;
