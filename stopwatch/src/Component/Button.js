import React from "react";

function Button(props) {
  const StartButton = <button onClick={props.handleStart}>Start</button>;
  const ActiveButtons = (
    <div>
      <button onClick={props.handleReset}>Reset</button>
      <button onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );

  return (
    <div>
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
export default Button;
