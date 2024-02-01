import parser from "html-react-parser";
import { Navbar } from "../components";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import { getPrivacyPolicy } from "../handleApi/documentApi";

const PrivacyPolicy = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getPrivacyPolicy();
        setData(data.data[0].notes);
      } catch (error) {
        setData("");
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    document.title = window.location.pathname;

    setTimeout(() => {
      document.title = "Chariot Interior - Privacy Policy";
    }, 2000);
  }, []);

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="prose max-w-full flex flex-col justify-center items-start gap-5 px-10 py-24">
        {parser(data)}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
