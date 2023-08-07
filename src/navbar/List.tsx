import { Icon } from "@iconify/react";

const List = () => {
  
  return (
<>
      <div className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] first:pt-10 px-6 text-[22px] font-[510] cursor-pointer">
        WORK
      </div>
      <div className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] px-6 text-[22px] font-[510] cursor-pointer">
        SERVICES
      </div>
      <div className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] px-6 text-[22px] font-[510] cursor-pointer">
        ABOUT US
      </div>
      <div className="text-[#21471c] hover:text-[#333232] hover:border-b-2 border-[#333232] px-6 text-[22px] font-[510] cursor-pointer">
        PEOPLE
      </div>
      <div className="text-[#21471c] cursor-pointer hover:text-[#333232] hover:border-b-2 border-[#333232] px-6">
        <Icon icon="pepicons-pop:dots-x" />
      </div>
      <div className="text-[#21471c] cursor-pointer px-6">
        <Icon icon="teenyicons:search-outline" fontSize={20} />
      </div>
    </>
  );
};

export default List;
