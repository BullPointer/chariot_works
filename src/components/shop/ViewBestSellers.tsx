import { useEffect, useState } from "react";
import { getProductsByFeatureApi } from "../../handleApi/productApi";
import { productsDataType } from "./typesData";
import { Link, createSearchParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const ViewBestSellers = () => {
  const [data, setData] = useState([] as productsDataType[]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const getData = async () => {
      window.innerWidth <= 768 ? setIsOpen(false) : setIsOpen(true);
      try {
        const { data } = await getProductsByFeatureApi("Best Sellers");
        console.log(data.products);

        setData(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 768 ? setIsOpen(false) : setIsOpen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full md:w-[30%] py-8 px-3 flex flex-col justify-start items-center gap-2 border-x-2">
      <div className="flex flex-row justify-between items-center w-full p-2 border-2 rounded bg-[#f3f1f1]">
        <div className="text-[18px] text-[#201f1f] ">Best Selling</div>
        {!isOpen ? (
          <Icon
            className="hover:cursor-pointer block md:hidden"
            onClick={() => setIsOpen(true)}
            icon="typcn:plus"
          />
        ) : (
          <Icon
            className="hover:cursor-pointer block md:hidden"
            onClick={() => setIsOpen(false)}
            icon="typcn:minus"
          />
        )}
      </div>
      {isOpen && (
        <div className="w-full p-3 border-2">
          {data?.map(({ _id, name, price, productImage, category }, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-center gap-2 py-2 border-b"
            >
              <div className="w-[30%] p-2 border-2">
                <Link
                  state={{
                    feature: "Best Sellers",
                    id: _id,
                    category: category,
                  }}
                  to={{
                    pathname: `/shop/products/product-details`,
                    search: createSearchParams({
                      sn: name.toLowerCase(),
                      pid: _id,
                    }).toString(),
                  }}
                >
                  <img
                    className="w-full"
                    src={`http://localhost:3000/${productImage}`}
                    alt="productImg"
                  />
                </Link>
              </div>
              <div className="w-[70%]">
                <Link
                  state={{
                    feature: "Best Sellers",
                    id: _id,
                    category: category,
                  }}
                  to={{
                    pathname: `/shop/products/product-details`,
                    search: createSearchParams({
                      sn: name.toLowerCase(),
                      pid: _id,
                    }).toString(),
                  }}
                  className="text-[14px]"
                >
                  {name}
                </Link>
                <div className="text-[15px]">{price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewBestSellers;
