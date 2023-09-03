import Img1 from "../../Images/art-work_Img/before.jpeg";
import Img2 from "../../Images/art-work_Img/after.jpeg";
import galary1 from "../../Images/gypsumImg/galary1.jpeg";
import galary2 from "../../Images/gypsumImg/galary2.jpeg";
import galary3 from "../../Images/gypsumImg/galary3.jpeg";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import GetInTouch from "./GetInTouch";

const ArtWork = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="">
        <div className="py-10">
          <div className="pt-20 px-4 lg:px-36 text-[18px] xs:text-[20px] lg:text-[25px] text-center">
            PAINTING AND CEMENT ART WORK
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            We akin to texture architects, layer colors and cement to craft
            murals and sculptures that transcend convention. From captivating
            murals breathing life into spaces to intricate cement designs
            inviting tactile exploration, our creations embody the very essence
            of artistic versatility.
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            Yet, our commitment reaches beyond aesthetics; it's about evoking
            emotion. Our artistry isn't just an embellishment; it's a language,
            speaking volumes through every shade, every pattern, and every
            texture. We partner closely with you, comprehending your artistic
            vision, embracing your design desires, and infusing your
            surroundings with a symphony of colors and textures that narrate
            your story. Our collaborations aren't transactions; they're
            co-creations that give life to your artistic aspirations.
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
            Our service to you goes beyond being a service; it's an enclave of
            creativity, a sanctuary for self-expression, and a destination for
            those who yearn to enliven their spaces with the magic of painting
            and cement artistry. Embark with us on a journey to redefine your
            surroundings and immerse yourself in the fusion of hues and textures
            that redefine living spaces.
          </div>
        </div>
        <div className="w-full">
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

export default ArtWork;
