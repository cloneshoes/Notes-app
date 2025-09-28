import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";
import "./notes.css"

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="notes" element={<Notes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

