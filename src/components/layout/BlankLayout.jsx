import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const BlankLayout = () => {
  return (
    <div className="flex flex-col min-h-screen xl:mx-auto max-w-7xl bg-orange-50">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BlankLayout;
