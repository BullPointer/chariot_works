import { getAddToCartUUID, setAddToCartUUID } from "./handleApi/handleCookie";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { validateToken } from "./utils/AuthValidation";
import { ProtectedCheckout } from "./utils/ProtectedRoutes";
import {
  Home,
  NotFound,
  ContactUs,
  AboutUs,
  PrivacyPolicy,
  Service,
  GypsumInstallation,
  PlasterInstallation,
  Screeding,
  HouseCleaning,
  ArtWork,
  Shop,
  MainShop,
  ProductDetails,
  ViewProducts,
  ShoppingCart,
  Checkout,
  SignIn,
  SignUp,
  ViewCategory,
  Brands,
  ForgotPassword,
  NewPassword,
  VerifiedUser,
} from "./components/index";

const App = () => {
  const handleScrollTo = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.addEventListener("load", handleScrollTo);
    return () => window.removeEventListener("load", handleScrollTo);
  }, []);

  useEffect(() => {
    validateToken();

    const cartId = getAddToCartUUID();
    console.log(cartId);

    if (!cartId) {
      setAddToCartUUID();
    } else {
      console.log(cartId);
    }
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="usr/sign-in" element={<SignIn />} />
      <Route path="usr/sign-up" element={<SignUp />} />
      <Route path="usr/forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<NewPassword />} />
      <Route path="user" element={<VerifiedUser />} />
      <Route path="shop" element={<Shop />}>
        <Route index element={<MainShop />} />
        <Route path="products/product-details" element={<ProductDetails />} />
        <Route path="search" element={<ViewProducts />} />
        <Route path="products/:feature" element={<ViewProducts />} />
        <Route path="category/:category" element={<ViewCategory />} />
        <Route path="view_cart" element={<ShoppingCart />} />
        <Route path="brands" element={<Brands />} />
        <Route path="brands/:brand" element={<Brands />} />
        <Route
          path="handler/order"
          element={
            <ProtectedCheckout>
              <Checkout />
            </ProtectedCheckout>
          }
        />
      </Route>
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="service" element={<Service />} />
      <Route
        path="service/gypsum-installation"
        element={<GypsumInstallation />}
      />
      <Route
        path="service/plaster-installation"
        element={<PlasterInstallation />}
      />
      <Route path="service/screeding" element={<Screeding />} />
      <Route path="service/house-cleaning" element={<HouseCleaning />} />
      <Route path="service/art-work" element={<ArtWork />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default App;
