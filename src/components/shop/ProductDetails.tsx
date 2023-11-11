/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import parser from "html-react-parser";
import { productsDataType } from "./typesData";
import { useLocation } from "react-router-dom";
import ProductsByCategory from "./ProductByCategory";
import { useAddtoCartContext } from "../../context/AddToCartContext";
import { getProductByIdApi, getProductsApi } from "../../handleApi/productApi";
import ProductInfo from "./shopContainer/ProductInfo";

const ProductDetails = () => {
  const { state } = useLocation();
  const [active, setActive] = useState("a");
  const [product, setProduct] = useState({} as productsDataType);
  const [relatedProduct, setRelatedProduct] = useState(
    [] as productsDataType[]
  );

  useEffect(() => {
    const getProductsFunc = async () => {
      try {
        const { data } = await getProductByIdApi(state.id);

        setProduct(data.product as productsDataType);
      } catch (error) {
        console.log("New Error is ", error);
      }
    };
    getProductsFunc();
    const getRelatedProductsFunc = async () => {
      try {
        const { data } = await getProductsApi();

        const filteredProduct = data.products.filter(
          (d: productsDataType) => d.category === state.category
        );
        setRelatedProduct(filteredProduct);
      } catch (error) {
        console.log("Error is ", error);
      }
    };
    getRelatedProductsFunc();
  }, [state]);

  const { handleAddToCart } = useAddtoCartContext();

  return (
    <div className="">
      {product && (
        <ProductInfo product={product} handleAddToCart={handleAddToCart} />
      )}
      <div>
        <div className="flex flex-row justify-start items-start gap-1 sm:gap-3 px-2 py-5 md:p-10">
          <div
            onClick={() => setActive("a")}
            className={`py-1 px-2 sm:py-2 sm:px-4 text-[13px] sm:text-[15px] ${
              active === "a"
                ? "bg-[#756d9c;] text-[#fff;]"
                : "bg-[#dfdee4;] text-[#9995a7;]"
            } rounded-md cursor-pointer`}
          >
            Description
          </div>
          <div
            onClick={() => setActive("b")}
            className={`py-1 px-2 sm:py-2 sm:px-4 text-[13px] sm:text-[15px] ${
              active === "b"
                ? "bg-[#756d9c;] text-[#fff;]"
                : "bg-[#dfdee4;] text-[#9995a7;]"
            }  rounded-md cursor-pointer`}
          >
            Reviews
          </div>
          <div
            onClick={() => setActive("c")}
            className={`py-1 px-2 sm:py-2 sm:px-4 text-[13px] sm:text-[15px] ${
              active === "c"
                ? "bg-[#756d9c;] text-[#fff;]"
                : "bg-[#dfdee4;] text-[#9995a7;]"
            }  rounded-md cursor-pointer`}
          >
            Return Policy
          </div>
        </div>
        <div className="px-2 md:px-10 pt-5 pb-20 text-[15px] text-[#4a4657;]">
          {active === "a"
            ? parser(String(product.description))
            : active === "b"
            ? parser(String(product.reviews))
            : parser(String(product.returnPolicy))}
        </div>
      </div>
      <ProductsByCategory
        heading={"Related Products"}
        bgColor={"#ecedee"}
        data={relatedProduct}
      />
    </div>
  );
};

export default ProductDetails;
