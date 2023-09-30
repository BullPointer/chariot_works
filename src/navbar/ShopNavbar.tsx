/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";
import { categories, rightCategory } from "./ShopNavDummyData";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAddtoCartContext } from "../context/AddToCartContext";

const Navbar = () => {
  const commonFlexStyle = "flex flex-row items-center";
  const [list, setList] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refContainer = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleDetectBody = (e: React.MouseEvent<HTMLElement>) => {
      const div = refContainer.current;
      if (div && !div[openIndex || 0].contains(e.target as Node)) {
        setList("");
        setOpenIndex(null);
      }
    };

    const clickEventListener = (e: React.MouseEvent<HTMLElement>) => {
      handleDetectBody(e);
    };

    document.addEventListener("click", clickEventListener as any);
    return () =>
      document.removeEventListener("click", clickEventListener as any);
  }, [openIndex]);

  const { cartCount } = useAddtoCartContext();

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
          <NavLink
            to={"/usr/sign-in"}
            className={`${commonFlexStyle} justify-center gap-2 text-[10px] sm:text-[12px] md:text-[14px] hover:text-[#676868] text-[#7f808a] font-[550] font-serif`}
          >
            <Icon className="text-[18px]" icon="majesticons:user-line" />
            <div>Login</div>
          </NavLink>
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
            className={`${commonFlexStyle} bg-[#fff;] p-2 h-full justify-center w-[90%]`}
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
          <Link
            to={"/shop/view_cart"}
            className={`relative ${commonFlexStyle} backdrop-filter justify-center w-10 h-10 rounded-full bg-[#ffffff73]`}
          >
            <Icon
              className="text-[18px] text-[#0f1529]"
              icon="emojione-monotone:shopping-cart"
            />
            <div
              className={`${commonFlexStyle} justify-center absolute w-5 h-5 -right-2 -top-2 bg-white rounded-full text-[10px] font-bold`}
            >
              {cartCount}
            </div>
          </Link>
          <div className="text-[#333c53] font-semibold">Cart</div>
        </div>
      </div>
      <div className="relative grid grid-cols-[200px_repeat(1,1fr)] bg-[#161531]">
        <div className={`z-10 relative justify-center p-4 cursor-pointer`}>
          <div
            ref={(ref) => {
              if (ref) refContainer.current[0] = ref;
            }}
            onClick={() => {
              setList(list === "left" ? "" : "left");
              setOpenIndex(0);
            }}
            className={`${commonFlexStyle} gap-2`}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <div className=" rounded-full bg-[#fff;] w-5 h-0.5 text-[30px] text-[#fff;]" />
              <div className=" rounded-full bg-[#fff;] w-5 h-0.5 text-[30px] text-[#fff;]" />
              <div className=" rounded-full bg-[#fff;] w-5 h-0.5 text-[30px] text-[#fff;]" />
            </div>
            <div className="text-[#fff;] text-[15px] font-semibold">
              Shop by category
            </div>
          </div>
          {list === "left" && (
            <div className="absolute min-w-[100vw] sm:min-w-full shadow-lg shadow-slate-500 top-full left-0 sm:left-auto">
              {categories?.map((list, index) => (
                <Link to={list.link}>
                  <div
                    onClick={() => setList("")}
                    key={index}
                    className="w-full p-2 text-[#333] text-[16px] bg-[#fff;] hover:bg-[#161531] hover:text-white"
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
            <Link state={{ feature: list.feature }} to={list.link}>
              <div key={index} className="p-4 text-[#fff;] text-[15px]">
                {list.cat}
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`${commonFlexStyle} flex lg:hidden justify-end pr-5 cursor-pointer`}
        >
          <div
            className="flex flex-col items-center justify-center gap-1"
            onClick={() => {
              setList(list === "right" ? "" : "right");
              setOpenIndex(1);
            }}
            ref={(ref) => {
              if (ref) refContainer.current[1] = ref;
            }}
          >
            <div className=" rounded-full bg-[#fff;] w-6 h-1 text-[30px] text-[#fff;]" />
            <div className=" rounded-full bg-[#fff;] w-6 h-1 text-[30px] text-[#fff;]" />
            <div className=" rounded-full bg-[#fff;] w-6 h-1 text-[30px] text-[#fff;]" />
          </div>
        </div>
        {list === "right" && (
          <div className="z-10 absolute left-0 top-full min-w-full bg-[#161531]">
            {rightCategory?.map((list, index) => (
              <Link state={{ feature: list.feature }} to={list.link}>
                <div
                  onClick={() => setList("")}
                  key={index}
                  className="w-full p-4 text-[#fff;] text-[15px] hover:bg-[#26254b]"
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
