import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Certification from "./pages/Certification";

import "./index.css";
import Products from "./components/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certification />} />
          <Route path="/products" element={<Products marginTop />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
