/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { productsDataType } from "../components/shop/typesData";
import { createCartsApi, getCartsApi } from "../handleApi/cartApi";

type ContextType = {
  carts: any;
  quantity: number;
  cartCount: number;
  shippingCost: number;
  taxFee: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  handleAddToCart: (e: productsDataType) => void;
};

const AddToCartContext = createContext({} as ContextType);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const AddToCartProvider = ({ children }: ContextProviderProps) => {
  const [carts, setCarts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [taxFee, setTaxFee] = useState(0);
  const [currency, setCurrency] = useState("ngn");

  const handleAddToCart = async (product: productsDataType) => {
    try {
      const response = await createCartsApi(product._id);
      console.log("The CreateCart response is this ", response);
      window.location.reload();
    } catch (error: any) {
      console.log("New Error is ", error);
    }
  };

  useEffect(() => {
    const getCartsFunc = async () => {
      try {
        const { data } = await getCartsApi();

        setCarts(data.products);
        const totalCount = data.products.reduce(
          (prev: number, next: productsDataType) => prev + next.count,
          0
        );
        setCartCount(totalCount);
        const totalQuantity = data.products.reduce(
          (prev: number, next: productsDataType) =>
            prev + next.count * next.price,
          0
        );
        setQuantity(totalQuantity);
        const totalShippingCost = data.products.reduce(
          (prev: number, next: productsDataType) =>
            prev + Number(next.shippingCost),
          0
        );
        setShippingCost(totalShippingCost);
        const totalTax = data.products.reduce(
          (prev: number, next: productsDataType) => prev + Number(next.tax),
          0
        );
        setTaxFee(totalTax);
      } catch (error) {
        console.log("New Error is ", error);
      }
    };
    getCartsFunc();
  }, []);

  return (
    <AddToCartContext.Provider
      value={{
        carts,
        quantity,
        setCartCount,
        cartCount,
        shippingCost,
        taxFee,
        handleAddToCart,
        setCurrency,
        currency,
      }}
    >
      {children}
    </AddToCartContext.Provider>
  );
};

export const useAddtoCartContext = () => {
  return useContext(AddToCartContext);
};
