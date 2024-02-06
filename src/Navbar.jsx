import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        textDecoration: "none",
        color: "black",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/sign-form">Sign-In</Link>
    </div>
  );
};

export default Navbar;
