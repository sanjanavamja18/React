//Child filr:::
import React, { useState } from "react";
import "./Collapsible.css";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapsible">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {[props.label]}
      </button>
      {isOpen && (
        <div className="contenet">
          <p>
            <h4>What is React and why use it?</h4>
          </p>
          <p>
            React allows developers to create large web applications that can
            change data, without reloading the page. The main purpose of React
            is to be fast, scalable, and simple. It works only on user
            interfaces in the application. This corresponds to the view in the
            MVC template.
          </p>
        </div>
      )}
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        Collaps
      </button>
    </div>
  );
}

export default Collapsible;
