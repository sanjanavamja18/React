// import React from "react";
// import Contain from "./Collapsible/Contain";

// function App() {
//   return (
//     <div>
//       <Contain label="">
//         <p>
//           <h4>What is React and why use it?</h4>
//         </p>
//         <p>
//           React allows developers to create large web applications that can
//           change data, without reloading the page. The main purpose of React is
//           to be fast, scalable, and simple. It works only on user interfaces in
//           the application. This corresponds to the view in the MVC template.
//         </p>
//       </Contain>
//     </div>
//   );
// }
// export default App;

// First Component i.e. App

import React, { Component, useState } from "react";
// import "./Contain.css";
import Contain from "./Collapsible/Contain";

class App extends Component {
  state = { data: "" };

  changeState = () => {
    this.setState({
      data: `state/props of parent component
	is send by onClick event to another component`,
    });
  };

  render() {
    return (
      <div className="contain">
        <Contain data={this.state.data} />
        <div className="contain">
          <h2>Compnent1</h2>
          <button onClick={this.changeState} type="button">
            {this.State ? "Collapse" : "Expand"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
