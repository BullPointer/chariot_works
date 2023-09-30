import { Icon } from "@iconify/react";
import Slogan from "../components/shop/Slogan";
import { footerSocialMediaList } from "./footerlist";
import FooterSelect from "./ShopFooterSelect";

const Footer = () => {
  return (
    <div>
      <Slogan />
      <FooterSelect />
      <div className=" break-words  flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#0e0d1f] p-5 sm:p-2">
        <div className="text-white text-[14px] sm:pl-10">
          ©Copyright 2023-2024.
        </div>
        <div className="flex flex-row justify-center items-center gap-3 ss:gap-8 py-2 pr-10">
          {footerSocialMediaList?.map(({ logo, link }, index) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#181733] rounded-full p-3"
            >
              <Icon
                className="text-[20px] text-[#04040c]"
                key={index}
                icon={logo}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
