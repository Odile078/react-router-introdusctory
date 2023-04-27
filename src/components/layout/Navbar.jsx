import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-small.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between gap-4 px-4 py-9 bg-orange-50">
      <Link to="/" className="block" end>
        <img
          src={Logo}
          className="object-contain object-center w-32 sm:w-44"
          alt="Logo"
        />
      </Link>

      <div className="flex gap-6">
        {[
          { name: "Host", url: "/host" },
          { name: "About", url: "about" },
          { name: "Vans", url: "vans" },
        ].map((link, index) => (
          <NavLink
            key={index}
            to={link.url}
            className={({ isActive }) =>
              `text-xl text-slate-600 hover:underline hover:text-slate-800 ${
                isActive ? " font-bold underline" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
