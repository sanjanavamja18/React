import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NoteState from "./components/context/notes/NoteState";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
