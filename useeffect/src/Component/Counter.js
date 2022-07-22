import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setNewCount] = useState(0);
  const [btn, setNewBtn] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    //console.log("i'm btn");
  }, [count]); //blank array=>only render once

  return (
    <div>
      <button
        onClick={() => {
          setNewCount(count + 1);
          console.log(count);
        }}
      >
        Count{count}
      </button>
      <button
        onClick={() => {
          setNewBtn(btn - 1);
          console.log("decrement", btn);
        }}
      >
        Button
      </button>
    </div>
  );
}

export default Counter;
