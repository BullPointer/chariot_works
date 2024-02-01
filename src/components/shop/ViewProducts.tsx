/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { productsDataType } from "./typesData";
import { Link, createSearchParams, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { shortenLetters } from "../utils/Shortener";
import {
  getProductsApi,
  getProductsByFeatureApi,
} from "../../handleApi/productApi";
import ViewBestSellers from "./ViewBestSellers";
import { useAddtoCartContext } from "../../context/AddToCartContext";

const ViewProducts = () => {
  const { state } = useLocation();
  const [productLength, setProductLength] = useState(100);
  const [loadIndex, setLoadIndex] = useState(9);
  const [data, setData] = useState([] as productsDataType[]);
  const [bestSellerData, setBestSellerData] = useState(
    [] as productsDataType[]
  );
  const [isLoading, setIsLoading] = useState(false);

  const { currency, currencyConverter } = useAddtoCartContext();

  useEffect(() => {
    const getProductsFunc = async () => {
      try {
        setData([]);
        setIsLoading(true);
        if (state?.feature === "All Category") {
          const response = await getProductsApi();

          setProductLength(response.data.products.length);

          const convertedProduct = response.data.products.map(
            (p: productsDataType) => {
              const converter = currencyConverter(p?.price);
              return {
                ...p,
                price: Number(String(converter).substring(0, 5)),
              };
            }
          );

          setData(convertedProduct);
          setIsLoading(false);
        } else {
          const response = await getProductsByFeatureApi(state?.feature);

          setProductLength(response.data.products.length);
          const convertedProduct = response.data.products.map(
            (p: productsDataType) => {
              const converter = currencyConverter(p?.price);
              return {
                ...p,
                price: Number(String(converter).substring(0, 5)),
              };
            }
          );

          setData(convertedProduct);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error is ", error);
      }
    };

    getProductsFunc();
  }, [loadIndex, state, currency]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getProductsByFeatureApi("Best Sellers");

        const convertedProduct = data.products.map((p: productsDataType) => {
          const converter = currencyConverter(p?.price);

          return {
            ...p,
            price: Number(String(converter).substring(0, 5)),
          };
        });

        setBestSellerData(convertedProduct);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [currency]);

  const loadMoreProducts = useCallback(() => {
    !(loadIndex > productLength) && setLoadIndex((prev) => prev + 3);
    console.log("Load index is ", loadIndex);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full py-16">
          <Icon
            className="text-[250px] xs:text-[300px] mx-auto text-[#353e63;]"
            icon="svg-spinners:wind-toy"
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="w-full md:w-[70%] pb-20 pt-10 bg-[#fff];">
            <div className="flex flex-row justify-between items-center px-5 my-3">
              <div className="text-[23px] xm:text-[28px] font-[700] text-[#161531;]">
                Results
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {data?.slice(0, loadIndex).map((p, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-2 pb-5 border-2 rounded-md mx-2 py-2 px-4 bg-[#fff;]"
                >
                  <div className="h-[250px] md:h-[300px] w-[100%]">
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
            <div className="flex flex-row justify-center items-center mt-10">
              {loadIndex > productLength ? (
                <div className="text-[#2291FF;]">No more records</div>
              ) : (
                <div
                  onClick={() => loadMoreProducts()}
                  className="py-2 px-3 rounded-md cursor-pointer hover:bg-[#185088;] hover:text-[#fff;] text-[#2291FF;] border-2 border-[#2291FF;]"
                >
                  Load more
                </div>
              )}
            </div>
          </div>
          <ViewBestSellers data={bestSellerData} />
        </div>
      )}
    </>
  );
};

export default ViewProducts;
