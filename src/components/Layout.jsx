// src/components/Layout.jsx
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="app-layout">
      <header className="header">
        <h1>Notes App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/notes">Notes</Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet /> {/* This is where child pages render */}
      </main>

      <footer className="footer">
        <p>© 2025 Notes App</p>
      </footer>
    </div>
  );
}

export default Layout;
