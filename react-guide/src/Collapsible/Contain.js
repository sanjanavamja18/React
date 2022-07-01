// //Child filr:::
// import React, { useState } from "react";
// import "./Contain.css";

// function Contain(props) {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="contain">
//       <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
//         {props.label}
//         {isOpen ? "Collapse" : "Expand"}
//       </button>
//       {isOpen && <div className="contain">{props.children}</div>}
//     </div>
//   );
// }

// export default Contain;

import React, { useState } from "react";
import "./Contain.css";

const Contain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contain">
      <h2>Component2</h2>

      <p>{props.data} </p>
      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {this.isOpen ? "Collapse" : "Expand"}
      </button> */}
    </div>
  );
};

export default Contain;
