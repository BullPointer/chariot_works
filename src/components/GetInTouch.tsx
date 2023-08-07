import { Icon } from "@iconify/react";
import Img from "../../Images/touch.jpg";
const GetInTouch = () => {
  return (
    <div className="relative bg-black">
      <div className="w-full h-[40%]  opacity-60">
        <img className="w-full h-[450px] object-cover" src={Img} alt="" />
      </div>
      <div className="w-full absolute top-[20%] left-[0] flex flex-row justify-center items-center">
        <div className="lg:w-[30%] px-4 lg:px-0 flex flex-col justify-center items-center gap-2">
          <div className="text-4xl sm:text-7xl pb-3 text-white">Contact Us</div>
          <div className="text-lg text-center text-white">
            Thinking of Giving us a try?
            Have a design, architecture or engineering need? Want to join SHP as
            a partner or employee? Drop us a line and let us know how we can
            best help you.
          </div>
          <div className="flex flex-row justify-center items-center gap-2 p-3 cursor-pointer">
            <div className="text-xl font-semibold text-white">
              GET IN TOUCH
            </div>
            <Icon className="text-white" icon="bxs:right-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
