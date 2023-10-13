/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
      <ProductInfo product={product} handleAddToCart={handleAddToCart} />
      <div>
        <div className="flex flex-row justify-start items-start gap-3 px-10 pt-10">
          <div
            onClick={() => setActive("a")}
            className={`py-2 px-4 ${
              active === "a"
                ? "bg-[#756d9c;] text-[#fff;]"
                : "bg-[#dfdee4;] text-[#9995a7;]"
            } rounded-md cursor-pointer`}
          >
            Description
          </div>
          <div
            onClick={() => setActive("b")}
            className={`py-2 px-4 ${
              active === "b"
                ? "bg-[#756d9c;] text-[#fff;]"
                : "bg-[#dfdee4;] text-[#9995a7;]"
            }  rounded-md cursor-pointer`}
          >
            Reviews
          </div>
          <div
            onClick={() => setActive("c")}
            className={`py-2 px-4 ${
              active === "c"
                ? "bg-[#756d9c;] text-[#fff;]"
                : "bg-[#dfdee4;] text-[#9995a7;]"
            }  rounded-md cursor-pointer`}
          >
            Return Policy
          </div>
        </div>
        <div className="px-10 pt-5 pb-20 text-[15px] text-[#4a4657;]">
          {active === "a"
            ? product.description
            : active === "b"
            ? product.reviews
            : product.returnPolicy}
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
