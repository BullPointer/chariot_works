import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/index";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { NotFound } from "./components/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Service from "./pages/Service";
import GypsumInstallation from "./components/GypsumInstallation";
import PlasterInstallation from "./components/PlasterInstallation";
import Screeding from "./components/Screeding";
import HouseCleaning from "./components/HouseCleaning";
import ArtWork from "./components/ArtWork";
import Shop from "./pages/Shop";

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
      <Route path="shop" element={<Shop />} >

      </Route>
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="service" element={<Service />} />
      <Route
        path="service/gypsum-installation"
        element={<GypsumInstallation />}
      />
      <Route
        path="service/plaster-installation"
        element={<PlasterInstallation />}
      />
      <Route
        path="service/screeding"
        element={<Screeding />}
      />
      <Route
        path="service/house-cleaning"
        element={<HouseCleaning />}
      />
      <Route
        path="service/art-work"
        element={<ArtWork />}
      />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default App;
