import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./server";
import Vans from "./components/Vans";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen xl:mx-auto max-w-7xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
