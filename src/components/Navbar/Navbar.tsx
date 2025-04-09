import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Java Blog </h1>
      </Link>
    </nav>
  );
};

export default Navbar;
