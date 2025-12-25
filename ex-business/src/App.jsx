import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Certification from "./pages/Certification";

export default function () {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <Certification />
      </div>
      <Footer />
    </>
  );
}
