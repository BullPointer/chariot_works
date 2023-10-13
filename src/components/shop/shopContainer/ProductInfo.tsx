import { Icon } from "@iconify/react";
import { productsDataType } from "../typesData";

type ProductInfoProps = {
  product: productsDataType;
  handleAddToCart: (e: productsDataType) => void;
};

const ProductInfo = ({ product, handleAddToCart }: ProductInfoProps) => {
  return (
    <div className="grid grid-cols-2 px-20 py-10">
      <div className="w-[100%] h-[500px]">
        <img
          className="w-[100%] h-[100%] object-cover rounded-md"
          src={`http://localhost:3000/${product.productImage}`}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-2 px-10">
        <div>
          <div className="text-[32px] font-[800] text-[#161531;]">
            {product.name}
          </div>
          <div className="text-[14px] font-[400] text-[#161531;]">
            {"(0 Reviews)"}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center">
          <div className="text-[30px] text-[#161531;]">{product.price}</div>
          <Icon
            className="text-[30px] text-[#161531;]"
            icon="tabler:currency-naira"
          />
        </div>
        <div className="flex flex-row justify-start items-center gap-2">
          <div className="flex flex-row justify-start items-center">
            <div className="text-[15px] text-[#e23841;]">{product.tax}</div>
            <Icon
              className="text-[17px] text-[#e23841;]"
              icon="tabler:currency-naira"
            />
          </div>
          <div className="text-[15px] text-[#e23841;]">Additional tax</div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-[80%]">
          <div className="w-[100%] grid grid-cols-2">
            <div className="text-[17px] text-[#161538] font-semibold opacity-90">
              Quantity availibility
            </div>
            <div className="text-[14px] text-[#161538;] font-[400]">
              {product.quantityAvailable === 0
                ? "Out of stock"
                : product.quantityAvailable}
            </div>
          </div>
          <div className="w-[100%] grid grid-cols-2">
            <div className="text-[17px] text-[#161538] font-semibold opacity-90">
              Shipping time
            </div>
            <div className="text-[14px] text-[#161538;] font-[400]">
              5 Days Shipping
            </div>
          </div>
          <div className="w-[100%] grid grid-cols-2">
            <div className="text-[17px] text-[#161538;] font-semibold opacity-90">
              Shipping charge:
            </div>
            <div className="flex flex-row justify-start items-center">
              <div className="text-[14px] text-[#161538;] font-[400]">
                {product.shippingCost}
              </div>
              <Icon
                className="text-[17px] text-[#161538;] font-[400]"
                icon="tabler:currency-naira"
              />
            </div>
          </div>
          <div className="w-[100%] grid grid-cols-2">
            <div className="text-[17px] text-[#161538] font-semibold opacity-90">
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
              className="flex flex-row justify-center items-center gap-1 cursor-pointer py-3 px-3 rounded-lg hover:bg-[#615c2e] bg-[#0e0e24;]"
            >
              <div className="text-[18px] text-[#fff;]">Add to cart</div>
              <Icon className="text-[18px] text-[#fff;]" icon="raphael:cart" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 cursor-pointer py-3 px-3 rounded-lg hover:bg-[#615c2e] bg-[#242455;]">
              <div className="text-[18px] text-[#fff;]">Wishlist</div>
              <Icon className="text-[18px] text-[#fff;]" icon="ph:heart-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
