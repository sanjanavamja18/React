import { useState } from "react";

export default function App() {
  const [names, setNames] = useState(["Alice", "Bob"]);

  const handleClick = () => {
    setNames((current) => [...current, "Carl"]);
  };

  const handlePush = () => {
    setNames(names.pop());
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>Push</button>
      </div>

      {names.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div>
  );
}
