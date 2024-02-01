import { useEffect } from "react";
import Img1 from "../../Images/cleaningImg/img1.jpg";
import Img2 from "../../Images/cleaningImg/img2.jpg";
import Img3 from "../../Images/cleaningImg/img3.jpeg";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import GetInTouch from "./GetInTouch";

const HouseCleaning = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    document.title = window.location.pathname;

    setTimeout(() => {
      document.title = "Chariot Interior - House Cleaning";
    }, 2000);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="">
        <div className="py-10">
          <div className="pt-20 px-4 lg:px-36 text-[18px] xs:text-[20px] lg:text-[25px] text-center">
            GENERAL HOUSE CLEANING
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            Like choreographers of order, choreographs a symphony of
            cleanliness, ensuring every nook and cranny is free from the grasp
            of dust and clutter. From immaculate kitchens that invite culinary
            creativity to flawlessly organized living spaces that encourage
            relaxation, our cleaning expertise encapsulates the essence of a
            well-balanced home.
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 py-2 text-center sm:text-left">
            Our journey revolves around elevating the everyday by meticulously
            curating cleanliness, so you can revel in the tranquility of a
            spotless home.
          </div>
        </div>
        <div className="w-full bg-[#070707] px-0 py-10 md:p-10">
          <div className="text-center text-[22px] xs:text-[26px] lg:text-[35px] text-white">
            Featured Projects
          </div>
        </div>
        <div className="w-full bg-black px-2 md:px-36 py-10">
          <div className="text-white text-center text-[18px] xs:text-[20px] lg:text-[22px] ">
            With an unwavering commitment, we collaborate closely with you,
            understanding your preferences, embracing your schedule, and
            tailoring our services to your unique needs. Our sessions aren't
            just cleanings; they're transformative experiences that reinvigorate
            your living spaces and enhance your quality of life. Therefore,
            embark on a journey with us to redefine cleanliness as an art form
            and bask in the bliss of harmonious living.
          </div>
        </div>
        <div className="w-full py-14">
          <div className="text-[#2c2929] text-center text-[22px] xs:text-[26px] lg:text-[35px] font-bold p-3">
            GALLERY
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 max-h-fit mb-10 ">
            {[Img1, Img2, Img3].map((img, index) => (
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

export default HouseCleaning;
