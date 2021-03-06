import React from "react";
import classes from "./Layout.css";
import Aux from "../../hoc/Auxiliary";

const layout = (props) => (
  <Aux>
    <div></div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
