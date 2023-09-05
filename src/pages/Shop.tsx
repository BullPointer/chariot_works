import { Outlet } from "react-router-dom";
import Navbar from "../navbar/ShopNavbar";
import Footer from "../footer/ShopFooter";

const Shop = () => {
    // bg-[#161531]
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Shop;
