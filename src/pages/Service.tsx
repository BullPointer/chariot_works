import { Navbar } from "../components";
import Img from "../../Images/service.jpg";
import Img2 from "../../Images/work.jpeg";
import Footer from "../footer/Footer";
import GetInTouch from "../components/GetInTouch";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    document.title = window.location.pathname;

    setTimeout(() => {
      document.title = "Chariot Interior - Service";
    }, 2000);
  }, []);

  return (
    <div className="relative h-screen overflow-auto">
      <Navbar />
      <div className="w-full flex flex-row overflow-x-hidden transform">
        <img className="h-screen min-w-full object-cover" src={Img} alt="" />
      </div>
      <div className="bg-black flex flex-row items-center justify-center py-10">
        <div className="w-[80%] flex flex-col items-center justify-center">
          <div className="text-white text-[22px] sm:text-[30px] p-5">
            OUR SERVICES
          </div>
          <div className="text-white text-[18px] md:text-[25px] text-center">
            Elevate spaces with CHARIOT WORKS: Where craftsmanship and
            imagination unite to craft extraordinary ceilings that inspire
            emotions, liberate homes by transcending designs and beautification,
            tell stories, and transcend the ordinary. Transform your vision into
            gravity-defying masterpieces, merging tradition and innovation,
            while collaborating closely to infuse your personality into every
            design. Redefine ceilings, redefine ambiance, redefine artistry.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1d1b1b]">
        <div className="flex flex-col py-10 justify-center items-center lg:items-start gap-8 sm:px-24 cursor-pointer">
          {[
            "Gypsum suspended P.O.P installation",
            "Direct Plaster Of Paris Mould Installation",
            "Screeding",
            "General house cleaning",
            "Painting and Cement art work.",
          ].map((list, index) => (
            <div
              key={index}
              className="text-white font-semibold text-[18px] md:text-[27px] text-center md:text-left"
            >
              {list}
            </div>
          ))}
        </div>
        <div>
          <img className="h-[100%] w-full object-cover" src={Img2} alt="" />
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Service;
