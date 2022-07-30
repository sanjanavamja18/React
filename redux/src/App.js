import "./App.css";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </div>
  );
}

export default App;
