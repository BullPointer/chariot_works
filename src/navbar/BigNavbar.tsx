import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { moreList, navData } from "./navData";
import { useState } from "react";

const BigNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [more, setMore] = useState<boolean>(false);

  return (
    <div
      onPointerLeave={() => setHoveredIndex(null)}
      className="hidden xl:flex flex-row justify-between items-center gap-16 font-medium text-xl"
    >
      {" "}
      {navData.map((data, index) => (
        <div
          onClick={() => setHoveredIndex(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          key={index}
          className="relative text-[#161531] hover:text-[#333232] hover:border-b-2 border-[#333232] px-2 text-[22px] font-[510] cursor-pointer"
        >
          <NavLink className="py-2 text-[18px]" to={data.link}>
            {data.text}
          </NavLink>
          <ul className="absolute left-0 top-8 pt-4 bg-white w-[300px] rounded-b-sm">
            {hoveredIndex === index &&
              data?.list?.map((item, i) => (
                <li
                  key={i}
                  className="text-[16px] font-bold text-[#161531] py-1 px-2 hover:text-white hover:bg-[#161531]"
                >
                 <Link to={item.link}>  {item.text.toUpperCase()} </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
      <div
        onPointerLeave={() => setMore(false)}
        className=" flex flex-row justify-between items-center gap-12 mr-4"
      >
        <div
          onMouseEnter={() => setMore(true)}
          className="relative text-[#161531] cursor-pointer hover:text-[#333232] hover:border-b-2 border-[#333232] px-2"
        >
          <NavLink className="py-8" to={"/"}>
            <Icon icon="pepicons-pop:dots-x" />
          </NavLink>
          <ul className="absolute -left-16 top-5 pt-4 bg-white w-[160px] rounded-b-sm">
            {more &&
              moreList?.map((item, i) => (
                <li
                  key={i}
                  className="text-[16px] font-bold text-[#161531] py-1 px-2 hover:text-white hover:bg-[#161531]"
                >
                  <Link to={item.link}> {item.text.toUpperCase()}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="relative text-[#161531] cursor-pointer">
          <Icon icon="teenyicons:search-outline" fontSize={20} />
        </div>
      </div>
    </div>
  );
};

export default BigNavbar;
