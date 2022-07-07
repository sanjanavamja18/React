import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Preson.js] rendering...");
    return (
      <Aux>
        <div>
          <div className="Person">
            <p onClick={this.props.click}>
              I'm a {this.props.name} and I'm {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input
              type="text"
              onChange={this.props.changed}
              value={this.props.name}
            ></input>
          </div>
        </div>
      </Aux>
    );
  }
}
export default Person;
