import Img1 from "../../Images/screedingImg/before.jpeg";
import Img2 from "../../Images/screedingImg/after.jpeg";
import galary1 from "../../Images/gypsumImg/galary1.jpeg";
import galary2 from "../../Images/gypsumImg/galary2.jpeg";
import galary3 from "../../Images/gypsumImg/galary3.jpeg";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import GetInTouch from "./GetInTouch";
import { useEffect } from "react";

const Screeding = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    document.title = window.location.pathname;

    setTimeout(() => {
      document.title = "Chariot Interior - Screeding";
    }, 2000);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="">
        <div className="py-10">
          <div className="pt-20 px-4 lg:px-36 text-[18px] xs:text-[20px] lg:text-[25px] text-center">
            Screeding
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            Our journey is one of transforming flooring into an art, employing
            the mastery of screeding techniques to create flawless, level
            foundations that set the stage for architectural brilliance.
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            At Precision Screeding, we are not just experts; we are sculptors of
            space, crafting substrates that become the cornerstone of every
            design endeavor. Through a marriage of cutting-edge technology and
            time-tested methods, each screed layer is a testament to the
            marriage of innovation and practicality.
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            Our skilled artisans, like architects of harmony, sculpt screed to
            perfection, ensuring the underfoot experience is as exceptional as
            the aesthetics above. From ultra-smooth surfaces that embrace modern
            minimalism to rugged textures that echo natural beauty, our
            screeding creations embody the essence of versatility.
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
            With an unwavering commitment, we however, are dedicated to
            extending beyond aesthetics; it's about durability. Our screeding
            doesn't just enhance; it fortifies, ensuring that your floors stand
            the test of time with unwavering resilience. Every inch, every
            slope, and every finish speaks volumes about the precision and care
            invested in our craft. We collaborate closely with you,
            understanding your design goals, embracing your architectural
            requirements, and laying the groundwork for a flawless foundation.
            Our consultations aren't mere discussions; they're creative
            partnerships that ensure your vision is realized with utmost
            precision.
          </div>
          <div className="text-white text-center text-[18px] xs:text-[20px] lg:text-[22px] ">
            We a sanctuary for quality, a haven for innovation, and a
            destination for those who seek to elevate their spaces from the
            ground up. Embark on a journey with us to redefine flooring with
            screeding excellence and experience the beauty of seamless
            foundations that harmonize with your architectural dreams.
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

export default Screeding;
