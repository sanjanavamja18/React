import { useState } from "react";

export default function App() {
  const [pushArr, setPushArr] = useState(["Alice", "Bob", "sanjana"]);
  const [pop, setPop] = useState(["S", "A", "N"]);
  const [string, setString] = useState("sanju");
  const [concate, newConcate] = useState("sanju");
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  const handleClick = () => {
    setPushArr((pushArr) => [...pushArr, "Sanju"]);
    //setPush(push.push("om"));
    setPop((pop) => [...pop]);
    setString(string.replace("sanju", "vamja"));
    newConcate(concate.concat("vamja"));
    setIncrement(increment + 1);
    setDecrement(decrement - 1);

    console.log(pushArr);
    console.log(pop);
    console.log(string);
    console.log(concate);
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>UseState</button>
        <br></br>
        {pushArr}
        <br></br>
        {pop}
        <br></br>
        {string}
        <br></br>
        {concate}
        <br></br>
        {increment}
        <br></br>
        {decrement}
        <br></br>
      </div>
    </div>
  );
}
