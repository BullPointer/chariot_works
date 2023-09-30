import { useEffect } from "react";
import { Navbar } from "../components";
import About from "../components/About";
import Welcome from "../components/Welcome";
import Work from "../components/Work";
import Footer from "../footer/Footer";

const Home = () => {
  const handleScrollTo = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.addEventListener("load", handleScrollTo);
    return () => window.removeEventListener("load", handleScrollTo);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Welcome />
      <About />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
