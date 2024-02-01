/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";
import { categories, rightCategory } from "./ShopNavDummyData";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAddtoCartContext } from "../context/AddToCartContext";
import { getProductsApi } from "../handleApi/productApi";
import { productsDataType } from "../components/shop/typesData";
import ShopSearchBar from "./ShopSearchBar";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const commonFlexStyle = "flex flex-row items-center";
  const [currencyList, setCurrencyList] = useState(false);
  const [list, setList] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchList, setShowSearchList] = useState(false);
  const [searchResult, setSearchResult] = useState([] as productsDataType[]);
  const refContainer = useRef<HTMLDivElement[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = async ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    try {
      const { data } = await getProductsApi();
      const filtered = data.products
        .filter((p: productsDataType) =>
          p.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 8);
      setSearchResult(filtered);
    } catch (error) {
      console.log("Error found in search query ", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const handleResize = (e: Event) => {
      const target = e.target as Window;
      setScreenSize(target.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

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

  useEffect(() => {
    const handleDetectSearchBar = (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as Node;
      const div = searchRef.current;
      if (div && !div.contains(target)) {
        setShowSearchList(false);
      }
    };

    document.addEventListener("click", handleDetectSearchBar as any);
    return () =>
      document.removeEventListener("click", handleDetectSearchBar as any);
  }, []);

  const { cartCount, currency, setCurrency } = useAddtoCartContext();

  return (
    <div>
      <div
        className={`flex flex-col xs:flex-row items-center justify-between bg-[#f2f2f2] p-3`}
      >
        <Link
          to={"/"}
          className="text-[10px] sm:text-[12px] md:text-[14px] hover:text-[#676868] text-[#7f808a] font-[550] font-serif"
        >
          HOME
        </Link>
        <div className={`${commonFlexStyle} justify-center gap-5 pr-10`}>
          {!token ? (
            <NavLink
              to={"/usr/sign-in"}
              className={`${commonFlexStyle} justify-center gap-2 text-[10px] sm:text-[12px] md:text-[14px] hover:text-[#676868] text-[#7f808a] font-[550] font-serif`}
            >
              <Icon className="text-[18px]" icon="majesticons:user-line" />
              <div>Login</div>
            </NavLink>
          ) : (
            <div
              onClick={handleLogout}
              className={`${commonFlexStyle} cursor-pointer justify-center gap-2 text-[10px] sm:text-[12px] md:text-[14px] hover:text-[#676868] text-[#7f808a] font-[550] font-serif`}
            >
              <Icon className="text-[18px]" icon="majesticons:user-line" />
              <div>Logout</div>
            </div>
          )}
          <div className="text-[10px] sm:text-[12px] md:text-[14px] hover:text-[#676868] text-[#7f808a] font-[550] font-serif">
            Become an affiliate?
          </div>
          {currencyList && (
            <div
              onClick={() => setCurrencyList(false)}
              className="z-40 w-full h-full fixed top-0 left-0"
            ></div>
          )}
          <div className="z-50 relative w-auto flex flex-col items-center">
            <div
              onClick={() => setCurrencyList(!currencyList)}
              className="flex flex-row justify-center items-center cursor-pointer hover:text-[#676868] text-[#7f808a]"
            >
              <div className="flex justify-start items-center py-1 px-2 text-[10px] sm:text-[12px] md:text-[14px] font-[550] font-serif">
                <span>{currency.toUpperCase()}</span>
                <Icon
                  icon={`${currency === "ngn" ? "mdi:naira" : "subway:usd"}`}
                />
              </div>
              {!currencyList ? (
                <Icon icon="ep:arrow-down-bold" />
              ) : (
                <Icon icon="ep:arrow-up-bold" />
              )}
            </div>
            {currencyList && (
              <div className="z-20 absolute top-full w-full">
                <div
                  onClick={() => setCurrency("ngn")}
                  className="flex justify-start items-center bg-white w-full py-1 px-2 text-[10px] sm:text-[12px] md:text-[12px] cursor-pointer hover:text-[#676868] text-[#7f808a] font-[550] font-serif"
                >
                  <span>NGN</span>
                  <Icon fontSize={12} icon="mdi:naira" />
                </div>
                <div
                  onClick={() => setCurrency("usd")}
                  className="flex justify-start items-center bg-white py-1 px-2 text-[10px] sm:text-[12px] md:text-[12px] cursor-pointer hover:text-[#676868] text-[#7f808a] font-[550] font-serif"
                >
                  <span>USD</span>
                  <Icon fontSize={12} icon="subway:usd" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${commonFlexStyle} relative justify-evenly bg-[#aac4c4] py-4`}
      >
        <div
          className={`${commonFlexStyle} pl-4  w-[40%] md:w-[30%] xl:w-[20%] justify-end`}
        >
          <Icon
            className="text-[36px] text-[#333c53]"
            icon="basil:shopping-cart-outline"
          />
          <Link to={"/shop"}>
            <div className="text-[13px] sm:text-[18px] lg:text-[22px] font-bold opacity-80">
              CHARIOT INTERIOR
            </div>
            <div className="text-[10px] sm:text-[12px]">
              Quality. Craftmanship. Assurance
            </div>
          </Link>
        </div>
        {screenSize <= 768 ? (
          showSearch && (
            <ShopSearchBar
              setShowSearchList={setShowSearchList}
              handleSearch={handleSearch}
              commonFlexStyle={commonFlexStyle}
              screenSize={screenSize}
              showSearchList={showSearchList}
              searchResult={searchResult}
              searchRef={searchRef}
            />
          )
        ) : (
          <ShopSearchBar
            setShowSearchList={setShowSearchList}
            handleSearch={handleSearch}
            commonFlexStyle={commonFlexStyle}
            screenSize={screenSize}
            showSearchList={showSearchList}
            searchResult={searchResult}
            searchRef={searchRef}
          />
        )}
        <div
          onClick={() => setShowSearch(!showSearch)}
          className={`cursor-pointer ${commonFlexStyle} flex md:hidden backdrop-filter justify-center w-10 h-10 rounded-full bg-[#ffffff73]`}
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
                <Link
                  state={{ category: list.category }}
                  to={list.link.split(".").join("").toLowerCase()}
                >
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
