import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { moreList, navData } from "./navData";
import { useState } from "react";

const BigNavbar = () => {
  const token = localStorage.getItem("token");
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [more, setMore] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    console.log(token);
  };

  return (
    <div className="py-2 hidden xl:flex flex-row justify-between items-center gap-16 font-medium text-xl">
      {navData.map((data, index) => (
        <div
          onClick={() => setHoveredIndex(index)}
          onPointerLeave={() => setHoveredIndex(null)}
          key={index}
          className="relative text-[#161531] hover:text-[#333232] hover:border-b-2 border-[#333232] px-2 text-[22px] font-[510] cursor-pointer"
        >
          <NavLink
            onMouseEnter={() => setHoveredIndex(index)}
            className={`${""} py-2 text-[18px]`}
            to={data.link}
          >
            {data.text}
          </NavLink>
          <ul className="absolute left-0 top-8 pt-4 bg-white w-[300px] rounded-b-sm ">
            {hoveredIndex === index &&
              data?.list?.map((item, i) => (
                <li
                  key={i}
                  className="text-[16px] font-bold text-[#161531] py-1 px-2 hover:text-white hover:bg-[#8293e6]"
                >
                  <Link to={item.link}> {item.text.toUpperCase()}</Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
      {token ? (
        <div
          onClick={handleLogout}
          className="text-[#161531;] text-[18px] hover:text-[#333232;] hover:border-b-2 border-[#333232;] px-2 font-[510] cursor-pointer"
        >
          SIGN-OUT
        </div>
      ) : (
        <NavLink
          className="text-[#161531;] text-[18px] hover:text-[#333232;] hover:border-b-2 border-[#333232;] px-2 font-[510] cursor-pointer"
          to={"/usr/sign-in"}
        >
          SIGN-IN
        </NavLink>
      )}
      <div className="flex flex-row justify-between items-center gap-12 mr-4">
        <div
          onPointerLeave={() => setMore(false)}
          className="relative text-[#161531] cursor-pointer hover:text-[#333232] hover:border-b-2 border-[#333232] px-2"
        >
          <NavLink onMouseEnter={() => setMore(true)} className="py-8" to={"/"}>
            <Icon icon="pepicons-pop:dots-x" />
          </NavLink>
          <ul className="absolute -left-16 top-5 pt-4 bg-white w-[160px] rounded-b-sm">
            {more &&
              moreList?.map((item, i) => (
                <Link to={item.link}>
                  <li
                    key={i}
                    className="text-[16px] font-bold text-[#161531] py-1 px-2 hover:text-white hover:bg-[#8293e6]"
                  >
                    {item.text}
                  </li>
                </Link>
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
