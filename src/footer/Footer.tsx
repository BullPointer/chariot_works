import { Icon } from "@iconify/react";
import Logo from "../../Images/logo.jpeg";

const Footer = () => {
  const commonStyle = "flex flex-row justify-center items-center ";
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row justify-evenly items-center gap-2 bg-black py-10`}
    >
      <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
        <img className="w-6 h-6 sm:w-12 sm:h-12" src={Logo} alt="" />
        <div className="font-bold text:xl sm:text-2xl lg:text-4xl text-white">CHARIOT WORKS</div>
      </div>
      <div className={`${commonStyle} flex-col lg:flex-row gap-5 p-3 lg:p-0`}>
        {["CONTACT", "CAREERS", "LATEST", "PRIVACY POLICY"].map(
          (list, index) => (
            <div className="text-[18px] text-white" key={index}>
              {list}
            </div>
          )
        )}
      </div>
      <div className={`${commonStyle}  flex-row gap-5`}>
        {[
          "formkit:twitter",
          "ic:sharp-facebook",
          "fa:instagram",
          "et:linkedin",
          "formkit:whatsapp",
        ].map((list, index) => (
          <Icon
            key={index}
            className="text-white cursor-pointer"
            icon={list}
            fontSize={30}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
