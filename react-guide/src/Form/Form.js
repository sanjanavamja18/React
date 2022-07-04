import React, { useState } from "react";
import "./Form.css";

function Form({ sendDataToPerent }) {
  const [hindiMark, setHindiMark] = useState("");
  const [mathsMark, setMathsMark] = useState("");
  const [scienceMark, setScienceMark] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToPerent(hindiMark, mathsMark, scienceMark);
  };

  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label>
          Name:
          <input type="text" />
        </label>
        <br></br>
        <br></br>
        <label>
          Mark1:
          <input
            type="number"
            value={hindiMark}
            onChange={(event) => setHindiMark(event.target.value)}
            autoComplete="off"
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Mark2:
          <input
            type="number"
            value={mathsMark}
            onChange={(event) => setMathsMark(event.target.value)}
            autoComplete="off"
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Mark3:
          <input
            type="number"
            value={scienceMark}
            onChange={(event) => setScienceMark(event.target.value)}
            autoComplete="off"
          />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Form;
