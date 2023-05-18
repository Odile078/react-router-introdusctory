import { Link, NavLink, redirect } from "react-router-dom";
import Logo from "../../assets/images/logo-small.svg";
const Navbar = () => {
  const isLoggedIn = localStorage.getItem("loggedin");

  const logOut = () => {
    localStorage.removeItem("loggedin");
    redirect("/login");
  };

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-9 bg-orange-50">
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
      <div className="flex items-center gap-2">
        <Link to="login">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.12104 15.8047C5.15267 14.6564 7.4998 14.001 10 14.001C12.5002 14.001 14.8473 14.6564 16.879 15.8047M13 8.00098C13 9.65783 11.6569 11.001 10 11.001C8.34315 11.001 7 9.65783 7 8.00098C7 6.34412 8.34315 5.00098 10 5.00098C11.6569 5.00098 13 6.34412 13 8.00098ZM19 10.001C19 14.9715 14.9706 19.001 10 19.001C5.02944 19.001 1 14.9715 1 10.001C1 5.03041 5.02944 1.00098 10 1.00098C14.9706 1.00098 19 5.03041 19 10.001Z"
              stroke="#161616"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <button onClick={logOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
