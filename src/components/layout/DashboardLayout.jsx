import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const categories = [
    { name: "Dashboard", url: "/host" },
    { name: "Income", url: "/host/income" },
    { name: "Vans", url: "/host/vans" },
    { name: "Reviews", url: "/host/reviews" },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-6 my-10">
        <div className="flex flex-wrap gap-4 ">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.url}
              className="text-xl text-slate-600 hover:underline hover:text-slate-800"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
