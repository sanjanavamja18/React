import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Security from "./Component/Security";
import Compile from "./Component/Compile";
import Course from "./Component/Course";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="courses">Courses</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />}>
            <Route path="Security" element={<Security />} />
            <Route path="Compile" element={<Compile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
