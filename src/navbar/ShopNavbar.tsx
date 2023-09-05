/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";
import { categories, rightCategory } from "./ShopNavDummyData";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const commonFlexStyle = "flex flex-row items-center";
  const [leftList, setLeftList] = useState(false);
  const [rightList, setRightList] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDetectBody = (e: React.MouseEvent<HTMLElement>) => {
      const div = ref.current as HTMLElement | undefined;
      if (div && !div.contains(e.target as Node)) {
        setLeftList(false);
        setRightList(false);
      }
    };

    const clickEventListener = (e: React.MouseEvent<HTMLElement>) => {
      handleDetectBody(e);
    };

    document.addEventListener("click", clickEventListener as any);
    return () =>
      document.removeEventListener("click", clickEventListener as any);
  }, []);

  return (
    <div>
      <div className={`${commonFlexStyle} justify-between bg-[#f2f2f2] p-3`}>
        <Link
          to={"/"}
          className="text-[10px] sm:text-[12px] md:text-[14px] hover:text-[#676868] text-[#7f808a] font-[550] font-serif"
        >
          HOME
        </Link>
        <div className={`${commonFlexStyle} justify-center gap-5 pr-10`}>
          <div
            className={`${commonFlexStyle} justify-center gap-2 text-[10px] sm:text-[12px] md:text-[14px] hover:text-[#676868] text-[#7f808a] font-[550] font-serif`}
          >
            <Icon className="text-[18px]" icon="majesticons:user-line" />
            <div>Login</div>
          </div>
          <div className="text-[10px] sm:text-[12px] md:text-[14px] hover:text-[#676868] text-[#7f808a] font-[550] font-serif">
            Become an affiliate?
          </div>
        </div>
      </div>
      <div className={`${commonFlexStyle} justify-evenly bg-[#aac4c4] py-4`}>
        <div
          className={`${commonFlexStyle} pl-4  w-[40%] md:w-[30%] xl:w-[20%] justify-end`}
        >
          <Icon
            className="text-[36px] text-[#333c53]"
            icon="basil:shopping-cart-outline"
          />
          <Link to={"/shop"}>
            <div className="text-[13px] sm:text-[18px] lg:text-[22px] font-bold opacity-80">
              CHARIOT WORKS
            </div>
            <div className="text-[10px] sm:text-[12px]">
              Quality. Craftmanship. Assurance
            </div>
          </Link>
        </div>
        <div
          className={`${commonFlexStyle} hidden md:flex justify-center w-[50%] xl:w-[60%] mx-auto`}
        >
          <div
            className={`${commonFlexStyle} bg-white p-2 h-full justify-center w-[90%]`}
          >
            <input
              className="w-full h-[100%] p-2 outline-none"
              type="text"
              name=""
              placeholder="Search store..."
            />
            <Icon
              className="text-[25px] text-[#303030]"
              icon="akar-icons:search"
            />
          </div>
        </div>
        <div
          className={`${commonFlexStyle} flex md:hidden backdrop-filter justify-center w-10 h-10 rounded-full bg-[#ffffff73]`}
        >
          <Icon
            className={`text-[18px] text-[#0f1529] justify-center`}
            icon="system-uicons:search"
          />
        </div>
        <div
          className={`${commonFlexStyle} gap-1  w-[30%] md:w-[20%] justify-start`}
        >
          <div
            className={`relative ${commonFlexStyle} backdrop-filter justify-center w-10 h-10 rounded-full bg-[#ffffff73]`}
          >
            <Icon
              className="text-[18px] text-[#0f1529]"
              icon="emojione-monotone:shopping-cart"
            />
            <div
              className={`${commonFlexStyle} justify-center absolute w-5 h-5 -right-2 -top-2 bg-white rounded-full text-[10px] font-bold`}
            >
              0
            </div>
          </div>
          <div className="text-[#333c53] font-semibold">Cart</div>
        </div>
      </div>
      <div
        ref={ref}
        className="relative grid grid-cols-[200px_repeat(1,1fr)] bg-[#161531]"
      >
        <div className={`relative  justify-center p-4 cursor-pointer`}>
          <div
            onClick={() => {
              setLeftList(!leftList);
              setRightList(false);
            }}
            className={`${commonFlexStyle} gap-2`}
          >
            <Icon className="text-[25px] text-white" icon="fe:bar" />
            <div className="text-white text-[15px] font-semibold">
              Shop by category
            </div>
          </div>
          {leftList && (
            <div className="absolute min-w-[100vw] sm:min-w-full shadow-lg shadow-slate-500 top-full left-0 sm:left-auto">
              {categories?.map((list, index) => (
                <Link to={list.link}>
                  <div
                    onClick={() => setLeftList(false)}
                    key={index}
                    className="w-full p-2 text-[#333] text-[16px] bg-white hover:bg-[#161531] hover:text-white"
                  >
                    {list.cat}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className={`${commonFlexStyle} hidden lg:flex justify-end pr-5`}>
          {rightCategory?.map((list, index) => (
            <Link to={list.link}>
              <div key={index} className="p-4 text-white text-[15px]">
                {list.cat}
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`${commonFlexStyle} flex lg:hidden justify-end pr-5 cursor-pointer`}
        >
          <Icon
            onClick={() => {
              setRightList(!rightList);
              setLeftList(false);
            }}
            className=" text-[30px] text-white"
            icon="fe:bar"
          />
        </div>
        {rightList && (
          <div className="absolute left-0 top-full min-w-full bg-[#161531]">
            {rightCategory?.map((list, index) => (
              <Link to={list.link}>
                <div
                  onClick={() => setRightList(false)}
                  key={index}
                  className="w-full p-4 text-white text-[15px] hover:bg-[#26254b]"
                >
                  {list.cat}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;