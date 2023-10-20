/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { productsDataType } from "./typesData";
import { Link, createSearchParams, useLocation } from "react-router-dom";
import { shortenLetters } from "../utils/Shortener";
import { getProductsByCategoryApi } from "../../handleApi/productApi";
import ViewBestSellers from "./ViewBestSellers";

const ViewCategory = () => {
  const { state } = useLocation();
  const [productLength, setProductLength] = useState(100);
  const [loadIndex, setLoadIndex] = useState(12);
  const [data, setData] = useState([] as productsDataType[]);

  useEffect(() => {
    const getProductsFunc = async () => {
      setData([]);
      console.log("The cate is ", state);
      try {
        const response = await getProductsByCategoryApi(state.category);
        console.log("The product is ", response.data);
        console.log("The State is ", state);

        setProductLength(response.data.products.length);
        setData(response.data.products.slice(0, loadIndex));
      } catch (error) {
        console.log("Error is ", error);
      }
    };
    getProductsFunc();
  }, [loadIndex, state]);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      {data.length < 1 ? (
        <div className="w-full py-16">
          <Icon
            className="text-[250px] xs:text-[300px] mx-auto text-[#353e63;]"
            icon="svg-spinners:wind-toy"
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="w-full md:w-[70%] pb-20 pt-10 bg-[#fff;]">
            <div className="flex flex-row justify-between items-center px-5 my-3">
              <div className="text-[23px] xm:text-[28px] font-[700] text-[#161531;]">
                {state.category.toUpperCase()}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {data?.map((p, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-2 pb-5 border-2 rounded-md mx-2 py-2 px-4 bg-[#fff;]"
                >
                  <div className="h-[250px] md:h-[300px] w-[100%]">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={`http://localhost:3000/${p.productImage}`}
                      alt="Product Image"
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
                    className="text-[18px] xs:text-[20px] font-[600] text-[#161531;]"
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
                    <div className="text-[18px] sm:text-[22px] text-[#2291FF;]">
                      {p.price}
                    </div>
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
          <ViewBestSellers />
        </div>
      )}
    </>
  );
};

export default ViewCategory;
