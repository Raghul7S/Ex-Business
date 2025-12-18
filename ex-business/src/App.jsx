import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Certification from "./components/Certification/Certification";

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
