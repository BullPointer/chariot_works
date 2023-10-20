import { Link, createSearchParams, useLocation } from "react-router-dom";
import ViewBestSellers from "./ViewBestSellers";
import { shortenBy200Letters } from "../utils/Shortener";
import { useEffect, useState } from "react";
import { productsDataType } from "./typesData";
import { getProductsByBrandApi } from "../../handleApi/productApi";
import { Icon } from "@iconify/react";
import { getBrandById } from "../../handleApi/brandApi";

type BrandType = {
  _id: string;
  brand: string;
  about: string;
  productImg: unknown;
};

const Brands = () => {
  const { state } = useLocation();
  const [data, setData] = useState([] as productsDataType[]);
  const [brand, setBrand] = useState({} as BrandType);

  useEffect(() => {
    console.log(state);

    const getData = async () => {
      try {
        const { data } = await getProductsByBrandApi(state.brand);

        setData(data.products);
      } catch (error) {
        console.log("New error ", error);
      }
    };
    const getBrand = async () => {
      try {
        const { data } = await getBrandById(state.id);
        setBrand(data.data);
      } catch (error) {
        console.log("New error ", error);
      }
    };
    getBrand();
    getData();
  }, [state]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start">
      <div className="w-full md:w-[70%] pb-2 md:pb-20 pt-10 bg-[#fff;]">
        <div>
          <div className="text-[18px] font-[600] text-[#201e1e] bg-[#eeeef3;] p-2">
            About brand( {brand?.brand} )
          </div>
          <div className="text-[15px] text-[#201e1e] p-2">{brand.about}</div>
        </div>
        <div className="py-6">
          <div>
            {data?.map(
              (
                { name, category, _id, description, productImage, price },
                index
              ) => (
                <div
                  key={index}
                  className="min-h-fit mb-10 last:mb-0 flex flex-col sm:flex-row justify-center items-start"
                >
                  <div className="w-full sm:w-[30%] flex flex-row justify-center items-start border-r">
                    <img
                      className="w-[90%] sm:w-[80%] h-[180px] rounded-sm py-2 object-cover"
                      src={`http://localhost:3000/${productImage}`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1 min-h-[100%] w-full sm:w-[70%] px-5">
                    <div className="text-[17px] py-1 text-center sm:text-start">
                      {name}
                    </div>
                    <div className=" text-[15px] sm:py-1 text-center sm:text-start">
                      {description
                        ? shortenBy200Letters(description)
                        : "We have no description on our record yet"}
                    </div>
                    <div className="w-[100%] pb-2 flex flex-row justify-center sm:justify-start items-center">
                      <div className="text-[18px] sm:text-[22px] text-[#2291FF;]">
                        {price}
                      </div>
                      <Icon
                        className="text-[22px] text-[#2291FF;]"
                        icon="tabler:currency-naira"
                      />
                    </div>
                    <div className="">
                      <Link
                        to={{
                          pathname: `/shop/products/product-details`,
                          search: createSearchParams({
                            sn: name.toLowerCase(),
                            pid: _id,
                          }).toString(),
                        }}
                        state={{ id: _id, category: category }}
                        onClick={() => {
                          window.scrollTo({
                            behavior: "smooth",
                            left: 0,
                            top: 0,
                          });
                        }}
                        className="py-2 px-5 rounded-full text-[12px] sm:text-[15px] text-[#fff;] bg-[#2291FF;]"
                      >
                        Check details
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div></div>
      </div>
      <ViewBestSellers />
    </div>
  );
};

export default Brands;
