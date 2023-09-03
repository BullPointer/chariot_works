import Img1 from "../../Images/plasterImg/before.jpeg";
import Img2 from "../../Images/plasterImg/after.jpeg";
import galary1 from "../../Images/gypsumImg/galary1.jpeg";
import galary2 from "../../Images/gypsumImg/galary2.jpeg";
import galary3 from "../../Images/gypsumImg/galary3.jpeg";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import GetInTouch from "./GetInTouch";

const PlasterInstallation = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="">
        <div className="py-10">
          <div className="pt-20 px-4 lg:px-36 text-[18px] xs:text-[20px] lg:text-[25px] text-center">
            DIRECT PLASTER OF PARIS MOULD INSTALLATION
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 pt-5 pb-2 text-center sm:text-left">
            We are guardians of tradition, preserving the legacy of ornamental
            design with a modern twist. Through a blend of age-old techniques
            and contemporary creativity, each plaster mould is a testament to
            the seamless blend of heritage and innovation.
          </div>
          <div className="text-[17px] sm:text-[19px] px-5 sm:px-10 py-2 text-center sm:text-left">
            Our skilled craftsmen, akin to sculptors of antiquity, breathe life
            into plaster of Paris, creating intricate mouldings that transcend
            time. From intricate cornices that crown a room with regal charm to
            delicate friezes that whisper tales of opulence, our creations
            capture the essence of architectural splendor. Yet, our dedication
            extends beyond aesthetics; it's about narrative. Our mould
            installations don't just embellish; they tell stories of eras gone
            by, adding character and depth to spaces. Each curve, each motif,
            and each detail reflects the passion and precision woven into our
            craft.
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
            With an unwavering commitment, we collaborate closely with you,
            understanding your design aspirations, embracing your architectural
            vision, and infusing history into every mould installation. Our
            consultations aren't mere discussions; they're creative dialogues
            that shape your space's character and ambiance.
          </div>
          <div className="text-white text-center text-[18px] xs:text-[20px] lg:text-[22px] ">
            Step into the world , where timeless craftsmanship meets
            architectural elegance. Our journey is one of transforming spaces
            into living works of art through the meticulous artistry of direct
            mould installation using plaster of Paris, bringing a touch of
            history and sophistication to every corner.
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

export default PlasterInstallation;
