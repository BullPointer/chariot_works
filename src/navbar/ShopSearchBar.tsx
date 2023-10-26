import { Icon } from "@iconify/react";
import { productsDataType } from "../components/shop/typesData";
import { Link, createSearchParams } from "react-router-dom";
import { RefObject } from "react";

type ShopSearchBarProps = {
  setShowSearchList: (e: React.SetStateAction<boolean>) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  commonFlexStyle: string;
  screenSize: number;
  showSearchList: boolean;
  searchResult: productsDataType[];
  searchRef: RefObject<HTMLDivElement>;
};

const ShopSearchBar = ({
  setShowSearchList,
  handleSearch,
  commonFlexStyle,
  screenSize,
  showSearchList,
  searchResult,
  searchRef,
}: ShopSearchBarProps) => {
  return (
    <div
      className={`${commonFlexStyle} z-20 ${
        screenSize <= 768 ? "absolute top-full" : "relative"
      }   md:flex justify-center w-[100%] md:w-[50%] xl:w-[60%] mx-auto`}
    >
      <div
        ref={searchRef}
        className={`${commonFlexStyle} relative bg-[#fff;] p-2 h-full justify-center w-[90%]`}
      >
        <input
          className="w-full h-[100%] p-2 outline-none"
          type="text"
          name="search"
          onFocus={() => setShowSearchList(true)}
          onChange={handleSearch}
          placeholder="Search store..."
        />
        <Icon className="text-[25px] text-[#303030]" icon="akar-icons:search" />
        {showSearchList && (
          <div className="z-20 absolute w-[100%] h-auto overflow-auto top-full">
            {searchResult?.map((p, index) => (
              <Link
                to={{
                  pathname: `/shop/search`,
                  search: createSearchParams({
                    ref: "nav-search",
                    feature: p.feature.toLowerCase().split(" ").join("-"),
                  }).toString(),
                }}
                state={{ feature: p.feature }}
                onClick={() => {
                  window.scrollTo({
                    behavior: "smooth",
                    left: 0,
                    top: 0,
                  });
                  setShowSearchList(false);
                }}
                key={index}
              >
                <div className="w-full cursor-pointer border-b px-5 py-2 text-[15px] text-[#3f3b3b;] hover:bg-[#f5f5f5;] bg-[#fff;]">
                  {p.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopSearchBar;
