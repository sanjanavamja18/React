//Child filr:::
// import React from "react";
// import "./Contain.css";

// function Contain(props) {
//   return <div>{props.data}</div>;
// }

// export default Contain;

import React from "react";
import "./Contain.css";

const Contain = (props) => {
  return (
    <div className="contain">
      <p>{props.children}</p>
    </div>
  );
};

export default Contain;
