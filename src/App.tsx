import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/index";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { NotFound } from "./components/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Service from "./pages/Service";
import GypsumInstallation from "./components/GypsumInstallation";

const App = () => {
  const handleScrollTo = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.addEventListener("load", handleScrollTo);
    return () => window.removeEventListener("load", handleScrollTo);
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/service" element={<Service />} />
      <Route
        path="/service/gypsum-installation"
        element={<GypsumInstallation />}
      />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default App;
