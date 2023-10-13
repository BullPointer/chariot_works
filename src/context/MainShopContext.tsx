/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

type MainShopContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainShopContext = createContext({} as MainShopContextType);

type MainShopProps = {
  children: React.ReactNode;
};

export const MainShopProvider = ({ children }: MainShopProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MainShopContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </MainShopContext.Provider>
  );
};

export const useMainShopContext = () => {
  return useContext(MainShopContext);
};
