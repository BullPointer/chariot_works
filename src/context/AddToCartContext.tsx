/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { productsDataType } from "../components/shop/typesData";
import {
  createCartsApi,
  getCartsApi,
  getExchangeRateApi,
} from "../handleApi/cartApi";

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
  currencyConverter: (e: number) => void;
  usdPrice: number | null;
  ngnPrice: number | null;
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
  const [usdPriceRate, setUsdPriceRate] = useState(null);
  const [ngnPriceRate, setNgnPriceRate] = useState(null);

  const handleAddToCart = async (product: productsDataType) => {
    try {
      const response = await createCartsApi(product._id);
      console.log("The CreateCart response is this ", response);
      window.location.reload();
    } catch (error: any) {
      console.log("Create Cart New Error is ", error);
    }
  };

  useEffect(() => {
    const getCartsFunc = async () => {
      try {
        const { data } = await getCartsApi();

        const convertedPriceData = data.products.map((p: productsDataType) => {
          const converter = currencyConverter(p?.price);

          return {
            ...p,
            price: Number(String(converter).substring(0, 5)),
          };
        });

        setCarts(convertedPriceData);
        const totalCount = convertedPriceData.reduce(
          (prev: number, next: productsDataType) => prev + next.count,
          0
        );
        setCartCount(totalCount);
        const totalQuantity = convertedPriceData.reduce(
          (prev: number, next: productsDataType) =>
            prev + next.count * next.price,
          0
        );
        setQuantity(totalQuantity);
        const totalShippingCost = convertedPriceData.reduce(
          (prev: number, next: productsDataType) =>
            prev + Number(next.shippingCost),
          0
        );
        setShippingCost(totalShippingCost);
        const totalTax = convertedPriceData.reduce(
          (prev: number, next: productsDataType) => prev + Number(next.tax),
          0
        );
        setTaxFee(totalTax);
      } catch (error) {
        console.log("New Error is ", error);
      }
    };
    getCartsFunc();
  }, [currency]);

  const currencyConverter = (amount: number) => {
    let convertedValue;
    if (ngnPriceRate && usdPriceRate) {
      if (currency === "usd") {
        // Naira to Dollar
        convertedValue = amount * usdPriceRate;

        return convertedValue;
      } else if (currency === "ngn") {
        // Dollar to Naira
        convertedValue = amount * ngnPriceRate;

        return convertedValue;
      }
    } else return amount;
  };

  useEffect(() => {
    const getCurrency = async () => {
      try {
        const { data } = await getExchangeRateApi(currency?.toUpperCase());

        setNgnPriceRate(data.conversion_rates["NGN"]);
        setUsdPriceRate(data.conversion_rates["USD"]);
      } catch (error) {
        return console.log("New Error is ", error);
      }
    };
    getCurrency();
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
        usdPrice: usdPriceRate,
        ngnPrice: ngnPriceRate,
        currencyConverter,
      }}
    >
      {children}
    </AddToCartContext.Provider>
  );
};

export const useAddtoCartContext = () => {
  return useContext(AddToCartContext);
};
