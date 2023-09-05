import { Icon } from "@iconify/react";
import Img1 from "../../Images/work1.jpeg";
import Img2 from "../../Images/work2.jpeg";
import Img3 from "../../Images/work3.jpeg";
import GetInTouch from "./GetInTouch";
import ViewService from "./ViewService";
import ViewWork from "./ViewWork";
import Testimonials from "./Testimonials";

const Work = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-3">
        {[Img1, Img2, Img3].map((img, index) => (
          <div
            className="w-full h-[330px] lg:h-[400px] rounded-md cursor-pointer"
            key={index}
          >
            <img
              className="w-full h-[330px] lg:h-[400px] rounded-md object-cover"
              src={img}
              alt="image"
            />
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-row gap-2 justify-center items-center px-3 pt-8 pb-14 cursor-pointer">
          <div className="text-xl font-semibold text-[#161531]">
            VIEW OUR WORK
          </div>
          <Icon className="text-[#161531]" icon="bxs:right-arrow" />
        </div>
        <ViewService />
        <Testimonials />
        <ViewWork />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Work;
