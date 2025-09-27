import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";
import "./notes.css"

function App() {
  return (
    <div>
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/notes">Notes</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
    
    </div>
  );
}

export default App;

