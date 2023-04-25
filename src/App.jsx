import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./server";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import BlankLayout from "./components/layout/BlankLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BlankLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
