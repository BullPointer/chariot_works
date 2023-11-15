import { Icon } from "@iconify/react";
import Logo from "../assets/Logo.svg";
import Img from "../../Images/work.jpeg";
import { Link } from "react-router-dom";

const ViewService = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1d1b1b]">
      <div className="flex flex-col py-10 justify-center items-center lg:items-start gap-8 sm:px-24 cursor-pointer">
        <div className="bg-white px-2">
          <img src={Logo} alt="" width={80} height={80} />
        </div>
        <div className="text-3xl sm:text-6xl font-semibold text-[#eff7ee] text-center lg:text-left">
          Giving Excellence Through Service.
        </div>
        <p className="text-white text-[18px] text-center lg:text-left p-2 sm:p-0">
          Over the years we have successfully achieve good customer relationship
          through professionalism in handling our jobs.
        </p>
        <p className="text-white text-[18px] text-center lg:text-left p-2 sm:p-0">
          Some of our qualiies includes: Accurate Installations, Durable
          Installations, Good time management , Personel Safety, Minimum work
          place ltering, Speedy job delivery.
        </p>
        <div className="flex flex-row justify-center items-center gap-2 p-3 cursor-pointer">
          <Link to={"/service"}>
            <div className="text-xl font-semibold text-white">
              VIEW OUR Service
            </div>
          </Link>
          <Icon className="text-white" icon="bxs:right-arrow" />
        </div>
      </div>
      <div>
        <img className="h-[100%] w-full object-cover" src={Img} alt="" />
      </div>
    </div>
  );
};

export default ViewService;
