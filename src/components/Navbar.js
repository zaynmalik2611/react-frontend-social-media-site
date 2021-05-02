import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <ul className="my-nav">
        <li>
          <Link className="my-nav-item" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="my-nav-item" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="my-nav-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="my-nav-item" to="/communities">
            Communities
          </Link>
        </li>
        <li>
          <Link className="my-nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="my-site-name" to="/">
            Archway Therapia <i className="fas fa-medkit"></i>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
