/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { productsData, productsDataType } from "./typesData";
import { Link, createSearchParams, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { shortenLetters } from "../utils/Shortener";

const ViewProducts = () => {
  const { state } = useLocation();
  const [productLength, setProductLength] = useState(100);
  const [loadIndex, setLoadIndex] = useState(12);
  const [data, setData] = useState([] as productsDataType[]);

  useEffect(() => {
    const getProductsFunc = async () => {
      const filteredProduct = productsData.filter(
        (d) => d.feature === state.feature
      );
      setProductLength(filteredProduct.length);
      setData(filteredProduct.slice(0, loadIndex));
    };
    getProductsFunc();
  }, [loadIndex]);

  return (
    <div className="py-20 bg-[#fff];">
      <div className="flex flex-row justify-between items-center px-5 my-3">
        <div className="text-[28px] font-[700] text-[#161531;]">Results</div>
      </div>
      <div className="grid grid-cols-4">
        {data?.map((p, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-2 pb-5 border-2 rounded-md mx-2 py-2 px-4 bg-[#fff;]"
          >
            <div className="h-[300px] w-[100%]">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={p.productImage}
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
                icon="tabler:currency-naira"
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
      <div className="flex flex-row justify-center items-center mt-10">
        {loadIndex > productLength ? (
          <div className="text-[#2291FF;]">No more records</div>
        ) : (
          <div
            onClick={() => setLoadIndex(loadIndex + 12)}
            className="py-2 px-3 rounded-md cursor-pointer hover:bg-[#185088;] hover:text-[#fff;] text-[#2291FF;] border-2 border-[#2291FF;]"
          >
            Load more
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProducts;
