import React from "react";
import "./Form.css";
function Form(props) {
  return (
    <form>
      <div className="form">
        <h1>Login Form</h1>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Mark1:
          <input type="text" name="m1" />
        </label>
        <br></br>
        <br></br>
        <label>
          Mark2:
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Mark3:
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
export default Form;
