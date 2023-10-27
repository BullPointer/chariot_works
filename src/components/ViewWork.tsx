import { Icon } from "@iconify/react";
import { footerSocialMediaList } from "../footer/footerlist";

const ViewWork = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-[#161531] px-8 sm:px-32 py-10">
      <div className="text-3xl lg:text-5xl pb-3 text-white text-center px-10 sm:px-0">
        See How We Relate on Social Media Platforms
      </div>
      <div className="text-[18px] text-white ">
        Follow us on our social media pages, that is.
      </div>
      <div className="text-[20px] text-white font-bold">SOCIALIZE WITH US</div>
      <div className="flex flex-row justify-center items-center gap-3">
        {footerSocialMediaList?.map(({ link, logo }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            <Icon
              className="text-white cursor-pointer"
              icon={logo}
              fontSize={30}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ViewWork;
