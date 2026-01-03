import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Certification from "./pages/Certification";

import "./index.css";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certification />} />
          <Route path="/products" element={<Products marginTop />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
