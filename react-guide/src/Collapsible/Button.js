import React, { useState } from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button">
      <button onClick={() => props.setIsOpen(!props.isOpen)}>
        {props.isOpen ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}

export default Button;
