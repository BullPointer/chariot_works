/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import { useAddtoCartContext } from "../../context/AddToCartContext";
import { useEffect, useRef, useState } from "react";
import { productsDataType } from "./typesData";
import { mapNumber } from "../utils/Shortener";
import { Link } from "react-router-dom";
import { removeCartByIdApi, updateCartByIdApi } from "../../handleApi/cartApi";
import ViewBestSellers from "./ViewBestSellers";
import { getProductsByFeatureApi } from "../../handleApi/productApi";

type openOptionsType = {
  id: string;
  index: number | null;
};

const ShoppingCart = () => {
  const refContainer = useRef<HTMLDivElement[]>([]);
  const [bestSellerData, setBestSellerData] = useState(
    [] as productsDataType[]
  );
  const [openOptions, setOpenOptions] = useState({
    id: "",
    index: null,
  } as openOptionsType);
  const [sliceQty, setSliceQty] = useState({ from: 0, to: 5 });
  const {
    cartCount,
    quantity,
    carts: items,
    currency,
    currencyConverter,
  } = useAddtoCartContext();

  const handleShowmore = (qty: number) => {
    if (sliceQty.from < qty - 5) {
      setSliceQty({
        ...sliceQty,
        from: sliceQty.from + 5,
        to: sliceQty.to + 5,
      });
    }
  };

  const handleShowless = () => {
    if (sliceQty.from > 0) {
      setSliceQty({
        ...sliceQty,
        from: sliceQty.from - 5,
        to: sliceQty.to - 5,
      });
    }
  };

  useEffect(() => {
    const handleQuantitySelect = (e: MouseEvent) => {
      const divElem = refContainer.current;

      if (
        divElem &&
        !divElem[openOptions.index || 0].contains(e.target as Node)
      )
        setOpenOptions({ ...openOptions, id: "", index: null });
    };
    document.addEventListener("click", handleQuantitySelect);
    return () => document.removeEventListener("click", handleQuantitySelect);
  }, [openOptions]);

  const handleSelectQty = async (id: string, num: number) => {
    try {
      await updateCartByIdApi(id, Number(num));
      window.location.reload();
    } catch (error: any) {
      console.log("New Error is ", error.response.data);
    }
  };

  const handleRemoveCartItem = async (id: string) => {
    try {
      await removeCartByIdApi(id);
      window.location.reload();
    } catch (error) {
      console.log("Error found while removing Cart Item ", error);
    }
  };

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

  return (
    <div className="flex flex-col md:flex-row justify-center items-start bg-[#f1f1f5;]">
      <div className="w-full md:w-[70%] pt-5">
        <div className="w-[100%] flex flex-col justify-start items-center gap-3">
          <div className="flex flex-col justify-start items-start gap-5 w-[90%] sm:w-[80%] px-5 py-10 mt-10 bg-[#fff;]">
            <div className="font-[400] text-[25px]">Shopping Cart</div>
            {cartCount === 0 ? (
              <div>
                <div>There is no item found in your cart</div>
              </div>
            ) : (
              items?.map((item: productsDataType, index: number) => (
                <div
                  key={index}
                  className="w-full flex flex-col sm:flex-row justify-start items-start gap-5"
                >
                  <div className="w-full sm:w-56 h-44">
                    <img
                      className="w-[100%] h-[100%] rounded-md object-cover"
                      src={`http://localhost:3000/${item.productImage}`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <p className="text-[20px]">{item.name}</p>
                    <p className="flex flex-row justify-start items-center font-bold">
                      <p>{item.price}</p>
                      <Icon
                        className="text-[22px] text-[#000;]"
                        icon={
                          currency === "ngn"
                            ? "tabler:currency-naira"
                            : "tabler:currency-dollar"
                        }
                      />
                    </p>
                    <p>
                      <span className="mr-1">Quantity Available:</span>
                      {item.quantityAvailable}
                    </p>
                    <div className="flex flex-row justify-start gap-2">
                      <div
                        className={`relative ${
                          openOptions.id === item._id
                            ? "rounded-t-lg "
                            : "rounded-lg"
                        }  border-2 py-1 px-4 `}
                      >
                        <div
                          ref={(ref) => {
                            if (ref) refContainer.current[index] = ref;
                          }}
                          onClick={() => {
                            if (openOptions.id === item._id) {
                              setOpenOptions({
                                ...openOptions,
                                id: "",
                                index: null,
                              });
                            } else {
                              setOpenOptions({
                                ...openOptions,
                                id: item._id,
                                index: index,
                              });
                            }
                            setSliceQty({ ...sliceQty, from: 0, to: 5 });
                          }}
                          className="flex flex-row justify-center items-center gap-2 cursor-pointer text-[14px]"
                        >
                          <div>Qty: {item.count}</div>
                          <Icon icon="ep:arrow-down-bold" />
                        </div>
                        {openOptions.id === item._id && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="z-10 w-[100%] absolute top-full left-0 rounded-b-md shadow-[#e6e1e1;] shadow-sm border-2 border-[#e6e1e1;]"
                          >
                            {mapNumber(item.quantityAvailable, sliceQty)?.map(
                              (num, index) => (
                                <div
                                  onClick={() => handleSelectQty(item._id, num)}
                                  className="text-center text-[14px] py-1 px-2 hover:bg-[#dfdbdb] cursor-pointer bg-[#fff;]"
                                  key={index}
                                >
                                  {num}
                                </div>
                              )
                            )}
                            <div
                              className="w-[100%] flex flex-row justify-center items-center rounded-b-md"
                              key={index}
                            >
                              <div
                                className="w-full border-r text-center py-1 px-2 text-[20px] text-[#fff;] hover:bg-[#607963] cursor-pointer bg-[#787967]"
                                onClick={() => handleShowless()}
                              >
                                -
                              </div>
                              <div
                                className="w-full border-l text-center py-1 px-2 text-[20px] text-[#fff;] hover:bg-[#607963] cursor-pointer bg-[#b68d8d]"
                                onClick={() =>
                                  handleShowmore(item.quantityAvailable)
                                }
                              >
                                +
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        onClick={() => handleRemoveCartItem(item._id)}
                        className="py-1 px-4 rounded-lg cursor-pointer text-[#6c6b9b]"
                      >
                        <Icon
                          className="text-[24px]"
                          icon="fluent:delete-16-filled"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="w-[90%] sm:w-[80%] p-5 mb-10 bg-[#fff;]">
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-[18px] font-serif text-[#2291FF;]">
                Subtotal for all product
              </div>
              <div className="flex flex-row justify-start items-start gap-1 text-[18px] font-serif">
                <p>{cartCount} Item:</p>{" "}
                <p className="flex flex-row justify-start items-center font-bold">
                  <p>{quantity}</p>
                  <Icon
                    className="text-[22px] text-[#000;]"
                    icon={
                      currency === "ngn"
                        ? "tabler:currency-naira"
                        : "tabler:currency-dollar"
                    }
                  />
                </p>
              </div>
            </div>
            {cartCount > 0 && (
              <Link to={"/shop/handler/order"}>
                <div className="w-full p-2 mt-2 rounded-full font-bold text-center text-[15px] xs:text-[18px] text-[#fff;] hover:bg-[#3e3d5c] bg-[#6c6b9b;]">
                  Proceed to checkout
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ViewBestSellers data={bestSellerData} />
    </div>
  );
};

export default ShoppingCart;
