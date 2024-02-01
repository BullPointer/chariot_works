import { Outlet } from "react-router-dom";
import Navbar from "../navbar/ShopNavbar";
import Footer from "../footer/ShopFooter";
import { useEffect } from "react";
import { validateToken } from "../utils/AuthValidation";
import { getAddToCartUUID, setAddToCartUUID } from "../handleApi/handleCookie";

const Shop = () => {
  useEffect(() => {
    validateToken();

    const cartId = getAddToCartUUID();
    if (!cartId) {
      setAddToCartUUID();
    } else {
      console.log(cartId);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      document.title = window.location.pathname;

      setTimeout(() => {
        document.title =
          window.name?.length > 0 ? window.name : "Chariot Interior Shop item";
      }, 2000);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Shop;
