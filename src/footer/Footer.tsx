import { Icon } from "@iconify/react";
import Logo from "../assets/Logo.svg";

import { footerSocialMediaList, footerlist } from "./footerlist";
import { Link } from "react-router-dom";

const Footer = () => {
  const commonStyle = "flex flex-row justify-center items-center ";
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row justify-evenly items-center gap-2  bg-[#0e0d1f] py-10`}
    >
      <div className="flex cursor-pointer bg-white p-2">
        <img className="text-white" src={Logo} alt="" width={80} height={80} />
      </div>
      <div className={`${commonStyle} flex-col lg:flex-row gap-5 p-3 lg:p-0`}>
        {footerlist.map((list, index) => (
          <Link to={list.link} key={index}>
            <div className="text-[18px] text-white" key={index}>
              {list.text}
            </div>
          </Link>
        ))}
      </div>
      <div className={`${commonStyle}  flex-row gap-5`}>
        {footerSocialMediaList.map((list, index) => (
          <a
            key={index}
            href={list.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="text-white cursor-pointer"
              icon={list.logo}
              fontSize={30}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
