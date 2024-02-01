/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import { NumericFormat } from "react-number-format";
import ReactImageMagnify from "react-image-magnify";
import { productsDataType } from "../typesData";
import {
  ProductImagesInfo,
  ProductSideImageCarousel,
} from "./ProductImagesInfo";
import { useEffect, useState } from "react";
import { useAddtoCartContext } from "../../../context/AddToCartContext";

type ProductInfoProps = {
  product: productsDataType;
  handleAddToCart: (e: productsDataType) => void;
};

const ProductInfo = ({ product, handleAddToCart }: ProductInfoProps) => {
  const [image, setImage] = useState<null | string>(null);
  useEffect(() => {
    setImage(String(product.productImage));
  }, [product]);
  const { currency } = useAddtoCartContext();

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start">
      <ProductImagesInfo setImage={setImage} images={product.productImageArr} />
      <ProductSideImageCarousel
        setImage={setImage}
        images={product.productImageArr || []}
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 p-2 md:px-10 md:py-16">
        <div className="h-[200px] lg:h-[400px] bg-blue-500">
          <img
            className="w-full h-[100%] object-cover rounded-md hover:bg-[120%] block lg:hidden"
            src={`http://localhost:3000/${image}`}
            alt=""
          />
          <ReactImageMagnify
            className="z-10 hidden lg:block min-w-full w-full bg-green-500 object-contain"
            {...{
              smallImage: {
                alt: product.productImage,
                isFluidWidth: false,
                src: `http://localhost:3000/${image}`,
                width: 524,
                height: 300,
                sizes:
                  "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px, ",
              },
              largeImage: {
                src: `http://localhost:3000/${image}`,
                isFluidWidth: false,
                // width: 554,
                width: 524,
                height: 900,
                magnifierHeight: 100,
                magnifieWidth: 10,
                // zoomLevel: 1.5,
              },
            }}
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 px-1 md:px-10">
          <div>
            <div className="text-[15px] md:text-[32px] font-[800] text-[#161531;]">
              {product.name}
            </div>
            <div className="text-[14px] font-[400] text-[#161531;]">
              {"(0 Reviews)"}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center">
            <div className="text-[30px] text-[#161531;]">
              {/* {<NumericFormat value={product.price} />} */}
              {product.price}
            </div>
            <Icon
              className="text-[30px] text-[#161531;]"
              icon={
                currency === "ngn"
                  ? "tabler:currency-naira"
                  : "tabler:currency-dollar"
              }
            />
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <div className="flex flex-row justify-start items-center">
              <div className="text-[15px] text-[#e23841;]">{product.tax}</div>
              <Icon
                className="text-[17px] text-[#e23841;]"
                icon={
                  currency === "ngn"
                    ? "tabler:currency-naira"
                    : "tabler:currency-dollar"
                }
              />
            </div>
            <div className="text-[15px] text-[#e23841;]">Additional tax</div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full md:w-[80%]">
            <div className="w-[100%] grid grid-cols-2">
              <div className="text-[14px] sm:text-[17px] text-[#161538] font-semibold opacity-90">
                Quantity availibility
              </div>
              <div className="text-[14px] text-[#161538;] font-[400]">
                {product.quantityAvailable === 0
                  ? "Out of stock"
                  : product.quantityAvailable}
              </div>
            </div>
            <div className="w-[100%] grid grid-cols-2">
              <div className="text-[14px] sm:text-[17px] text-[#161538] font-semibold opacity-90">
                Shipping time
              </div>
              <div className="text-[14px] text-[#161538;] font-[400]">
                5 Days Shipping
              </div>
            </div>
            <div className="w-[100%] grid grid-cols-2">
              <div className="text-[14px] sm:text-[17px] text-[#161538;] font-semibold opacity-90">
                Shipping charge:
              </div>
              <div className="flex flex-row justify-start items-center">
                <div className="text-[14px] text-[#161538;] font-[400]">
                  {product.shippingCost}
                </div>
                <Icon
                  className="text-[17px] text-[#161538;] font-[400]"
                  icon={
                    currency === "ngn"
                      ? "tabler:currency-naira"
                      : "tabler:currency-dollar"
                  }
                />
              </div>
            </div>
            <div className="w-[100%] grid grid-cols-2">
              <div className="text-[14px] sm:text-[17px] text-[#161538] font-semibold opacity-90">
                Seller:
              </div>
              <div>
                <span className="font-[400] text-[#161538;] text-[14px]">
                  Zara Fashion
                </span>
                <div className="w-[100%] flex flex-row justify-start items-center gap-1">
                  <Icon
                    className=" text-[#FFD700;]"
                    icon="solar:star-bold-duotone"
                  />
                  <div className="font-[400] text-[#161538;] text-[14px]">
                    {product.star}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] grid grid-cols-2 gap-2">
              <div
                onClick={() => handleAddToCart(product)}
                className="flex flex-row justify-center items-center gap-1 cursor-pointer p-1 sm:p-2 md:p-3 rounded-lg hover:bg-[#615c2e] bg-[#0e0e24;]"
              >
                <div className="text-[14px] md:text-[18px] text-[#fff;]">
                  Add to cart
                </div>
                <Icon
                  className="text-[18px] text-[#fff;]"
                  icon="raphael:cart"
                />
              </div>
              <div className="flex flex-row justify-center items-center gap-1 cursor-pointer p-1 sm:p-2 md:p-3 rounded-lg hover:bg-[#615c2e] bg-[#242455;]">
                <div className="text-[14px] md:text-[18px] text-[#fff;]">
                  Wishlist
                </div>
                <Icon
                  className="text-[18px] text-[#fff;]"
                  icon="ph:heart-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
