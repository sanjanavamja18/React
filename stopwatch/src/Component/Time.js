import React from "react";

function Time(props) {
  return (
    <div>
      <div>
        <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>
        <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <span>{"h"}: </span>
        <span>{"m"}: </span>
        <span>{"s"} </span>
      </div>
    </div>
  );
}
export default Time;
