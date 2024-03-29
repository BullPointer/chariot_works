/* eslint-disable react-hooks/exhaustive-deps */
import { productsDataType } from "./typesData";
import { Link, createSearchParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { shortenLetters } from "../utils/Shortener";
import { useAddtoCartContext } from "../../context/AddToCartContext";

type ProdByCatProps = {
  heading: string;
  bgColor: string;
  data: productsDataType[];
};

const ProductsByCategory = ({ heading, bgColor, data }: ProdByCatProps) => {
  const { currency } = useAddtoCartContext();

  return (
    <div style={{ backgroundColor: `${bgColor}` }} className="py-20">
      <div className="flex flex-row justify-between items-center px-5 my-3">
        <div className="text-[28px] font-[700] text-[#161531;]">{heading}</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.slice(0, 12).map((p, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-2 pb-5 border-2 rounded-md mx-2 py-2 px-4 bg-[#fff;]"
          >
            <div className="h-[300px] w-[100%]">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={`http://localhost:3000/${p.productImage}`}
                alt=""
              />
            </div>
            <Link
              to={{
                pathname: `/shop/products/product-details`,
                search: createSearchParams({
                  sn: p.name.toLowerCase(),
                  pid: p._id,
                }).toString(),
              }}
              state={{ id: p._id, category: p.category }}
              onClick={() => {
                window.scrollTo({
                  behavior: "smooth",
                  left: 0,
                  top: 0,
                });
              }}
              className="text-[20px] font-[600] text-[#161531;]"
            >
              {shortenLetters(p.name)}
            </Link>
            <div className="w-[100%] flex flex-row justify-start items-center gap-1">
              <Icon
                className="text-[18px] text-[#FFD700;]"
                icon="solar:star-bold-duotone"
              />
              <div className="text-[16px] text-[#2291FF;]">{p.star}</div>
            </div>
            <div className="w-[100%] flex flex-row justify-start items-center">
              <div className="text-[22px] text-[#2291FF;]">{p.price}</div>
              <Icon
                className="text-[22px] text-[#2291FF;]"
                icon={
                  currency === "ngn"
                    ? "tabler:currency-naira"
                    : "tabler:currency-dollar"
                }
              />
            </div>
            <Link
              to={{
                pathname: `/shop/products/product-details`,
                search: createSearchParams({
                  sn: p.name.toLowerCase(),
                  pid: p._id,
                }).toString(),
              }}
              state={{ id: p._id, category: p.category }}
              onClick={() => {
                window.scrollTo({
                  behavior: "smooth",
                  left: 0,
                  top: 0,
                });
              }}
              className="py-1 px-3 rounded-full text-[13px] text-[#fff;] bg-[#2291FF;]"
            >
              Check details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
