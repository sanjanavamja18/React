import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Forms from "./Component/Forms";

function App() {
  return (
    <Router>
      <div>
        <h2>Routing of Component</h2>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/forms">Forms</Link>
        <br />
      </div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}
export default App;
