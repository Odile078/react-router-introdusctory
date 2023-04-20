import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-small.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between gap-4 px-4 py-9 bg-orange-50">
      <img
        src={Logo}
        className="object-contain object-center w-32 sm:w-44"
        alt="Logo"
      />
      <div className="flex gap-4">
        {[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ].map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="text-xl text-slate-600 hover:underline hover:text-slate-800"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
