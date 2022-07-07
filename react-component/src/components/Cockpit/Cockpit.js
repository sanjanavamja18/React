import React, { useEffect } from "react";
import Persons from "../Persons/Persons";
import "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Http Request..
    const setTimeout =
      (() => {
        alert("Saved Data To Cloud!");
      },
      1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });
  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
    </div>
  );
};
export default Cockpit;
