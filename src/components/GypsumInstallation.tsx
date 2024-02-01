import Img1 from "../../Images/gypsumImg/before.jpeg";
import Img2 from "../../Images/gypsumImg/after.jpeg";
import galary1 from "../../Images/gypsumImg/galary1.jpeg";
import galary2 from "../../Images/gypsumImg/galary2.jpeg";
import galary3 from "../../Images/gypsumImg/galary3.jpeg";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import GetInTouch from "./GetInTouch";
import { useEffect } from "react";

const GypsumInstallation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    document.title = window.location.pathname;

    setTimeout(() => {
      document.title = "Chariot Interior - Gypsum Installation";
    }, 2000);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="">
        <div className="py-10">
          <div className="pt-20 px-4 lg:px-36 text-[18px] xs:text-[20px] lg:text-[25px] text-center">
            GYPSUM SUSPENDED P.O.P INSTALLATION
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            An enchanting realm of Gypsum Suspended P.O.P Installation, where
            innovation and expertise converge to redefine interior spaces. Our
            journey unfolds as we seamlessly blend the versatility of gypsum
            with the intricate artistry of suspended plaster of Paris, crafting
            suspended ceilings that are as functional as they are visually
            captivating.
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            We are more than artisans; we are architects of ambiance. With a
            fusion of cutting-edge techniques and timeless craftsmanship, each
            suspended ceiling becomes a testament to the seamless marriage of
            aesthetics and practicality.
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            Our craftsmen, like modern sculptors, mold gypsum into stunning
            suspended masterpieces that transcend the conventional. From
            minimalist designs that exude contemporary elegance to intricate
            patterns that pay homage to classical aesthetics, our creations
            embody the essence of versatility.
          </div>
        </div>
        <div className="w-full bg-[#070707] px-0 py-10 md:p-10">
          <div className="text-center text-[22px] xs:text-[26px] lg:text-[35px] text-white">
            Featured Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex flex-col items-center justify-between px-2 py-5 md:p-5">
              <div className="text-[32px] font-bold text-white">Before</div>
              <div className="w-full h-[400px]">
                <img
                  className="w-full h-[100%] object-cover rounded-xl"
                  src={Img1}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between px-2 py-5 md:p-5">
              <div className="text-[32px] font-bold text-white">After</div>
              <div className="w-full h-[400px]">
                <img
                  className="w-full h-[100%] object-cover rounded-xl"
                  src={Img2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black px-2 md:px-36 py-10">
          <div className="text-white text-center text-[18px] xs:text-[20px] lg:text-[22px] ">
            With unwavering dedication, we collaborate closely with you,
            understanding your spatial needs, embracing your design aspirations,
            and weaving functionality into every suspended masterpiece. Our
            consultations aren't just discussions; they're creative
            collaborations that give life to your ideas and form to your vision.
          </div>
          <div className="text-white text-center text-[18px] xs:text-[20px] lg:text-[22px] ">
            Embark on a journey with us to redefine interiors from the top down
            and experience the magic of suspended ceilings that defy
            expectations.
          </div>
        </div>
        <div className="w-full py-14">
          <div className="text-[#2c2929] text-center text-[22px] xs:text-[26px] lg:text-[35px] font-bold p-3">
            GALLERY
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 max-h-fit mb-10 ">
            {[galary1, galary2, galary3].map((img, index) => (
              <div key={index} className="w-full h-[50%] px-[22px]">
                <img
                  className="w-full h-[300px] object-cover rounded-xl"
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default GypsumInstallation;
