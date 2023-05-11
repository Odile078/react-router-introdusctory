import { Link, NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const categories = [
    { name: "Dashboard", url: "." },
    { name: "Income", url: "income" },
    { name: "Vans", url: "vans" },
    { name: "Reviews", url: "reviews" },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-6 p-4 my-6">
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={category.url}
              end
              className={({ isActive }) =>
                `text-xl text-slate-600 hover:underline hover:text-slate-800 ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default HostLayout;
