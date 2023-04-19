import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
