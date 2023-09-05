import { useEffect } from "react";
import { Navbar } from "../components";
import About from "../components/About";
import Welcome from "../components/Welcome";
import Work from "../components/Work";
import Footer from "../footer/Footer";
import { userIdentifierApi, visitorsApi } from "../handleApi/visitApi";

const Home = () => {
  const handleScrollTo = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.addEventListener("load", handleScrollTo);
    return () => window.removeEventListener("load", handleScrollTo);
  }, []);

  const sessionFunc = async (value: string) => {
    try {
      await visitorsApi(value);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const userIdentifierFunc = async () => {
    const vid = localStorage.getItem("vid");
    try {
      if (!vid) {
        const { data } = await userIdentifierApi("new-visit", "");
        localStorage.setItem("vid", data.data.vid);
      } else {
        await userIdentifierApi("existing-visit", vid);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    const value = sessionStorage.getItem("visit");
    if (!value) {
      sessionFunc("new-visit");
      sessionStorage.setItem("visit", "v");
    } else {
      sessionFunc("existing-visit");
    }
    userIdentifierFunc();
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
