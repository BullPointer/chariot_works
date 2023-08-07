import { Icon } from "@iconify/react";

const BigNavbar = () => {
  return (
    <div className="hidden xl:flex flex-row justify-between items-center gap-16 font-medium text-xl">
      {" "}
      <div className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] px-2 text-[22px] font-[510] cursor-pointer">
        WORK
      </div>
      <div className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] px-2 text-[22px] font-[510] cursor-pointer">
        SERVICES
      </div>
      <div className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] px-2 text-[22px] font-[510] cursor-pointer">
        ABOUT US
      </div>
      <div className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] px-2 text-[22px] font-[510] cursor-pointer">
        PEOPLE
      </div>
      <div className=" flex flex-row justify-between items-center gap-12 mr-4">
        <div className="text-[#21471c] cursor-pointer hover:text-[#333232] hover:border-b-2 border-[#333232] px-2">
          <Icon icon="pepicons-pop:dots-x" />
        </div>
        <div className="text-[#21471c] cursor-pointer">
          <Icon icon="teenyicons:search-outline" fontSize={20} />
        </div>
      </div>
    </div>
  );
};

export default BigNavbar;
