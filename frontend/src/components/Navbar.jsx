import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "green", color: "white" }}>
      <h2>My App</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </li>
        <li>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
