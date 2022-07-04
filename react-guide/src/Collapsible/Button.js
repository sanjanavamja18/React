import React, { Component } from "react";
import "./Button.css";

class Button extends Component() {
  onClick() {
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "Collapse" : "Expand"}
    </button>;
  }
  render() {
    return (
      <div className="button">
        <button>Expand</button>
      </div>
    );
  }
}
export default Button;
