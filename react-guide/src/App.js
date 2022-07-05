import React, { useState } from "react";
import Contain from "./Collapsible/Contain";
import Button from "./Collapsible/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Contain>
        {isOpen && (
          <>
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
          </>
        )}
      </Contain>
      <Button setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
export default App;
