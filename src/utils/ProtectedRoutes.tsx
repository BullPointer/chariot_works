import { Navigate, useLocation } from "react-router-dom";
import { useAddtoCartContext } from "../context/AddToCartContext";

type ProtectedRoutesProps = {
  children: React.ReactNode;
};

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const location = useLocation();
  const tokenExists = localStorage?.getItem("token");
  if (tokenExists) {
    const token = JSON.parse(tokenExists);
    const expiredTimestamp = token?.exp;
    const currentTimestamp = Math.floor(Date.now());

    if (children && expiredTimestamp < currentTimestamp) {
      localStorage.removeItem("token");
      return (
        <Navigate to={"/usr/sign-in"} state={{ path: location.pathname }} />
      );
    }

    return children;
  } else {
    return <Navigate to={"/usr/sign-in"} state={{ path: location.pathname }} />;
  }
};

export const ProtectedCheckout = ({ children }: ProtectedRoutesProps) => {
  const { cartCount } = useAddtoCartContext();
  const location = useLocation();
  const tokenExists = localStorage?.getItem("token");
  if (tokenExists && cartCount > 0) {
    const token = JSON.parse(tokenExists);
    const expiredTimestamp = token?.exp;
    const currentTimestamp = Math.floor(Date.now());

    if (children && expiredTimestamp < currentTimestamp) {
      localStorage.removeItem("token");
      return (
        <Navigate to={"/usr/sign-in"} state={{ path: location.pathname }} />
      );
    }

    return children;
  } else {
    return (
      <Navigate to={"/shop/view_cart"} state={{ path: location.pathname }} />
    );
  }
};
