import { Icon } from "@iconify/react";
import Slogan from "../components/shop/Slogan";
import { footerSocialMediaList } from "./footerlist";
import FooterSelect from "./ShopFooterSelect";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Slogan />
      <FooterSelect />
      <div className="flex flex-row justify-between items-center bg-[#0e0d1f] p-2">
        <div className="text-white text-[14px] pl-10">
          ©Copyright 2023-2024.
        </div>
        <div className="flex flex-row justify-center items-center gap-8 py-2 pr-10">
          {footerSocialMediaList?.map(({ logo, link }, index) => (
            <Link to={link} className="bg-[#181733] rounded-full p-3">
              <Icon className="text-[20px] text-[#04040c]" key={index} icon={logo} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
