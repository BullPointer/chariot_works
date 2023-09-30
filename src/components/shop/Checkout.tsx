import { useState } from "react";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import Address from "./checkout/Address";
import ShippingMethod from "./checkout/ShippingMethod";
import Payment from "./checkout/Payment";

const Checkout = () => {
  const [showComponent, setShowComponent] = useState("address");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_35%]">
      <div className="relative w-full px-4 my-5">
        <Address
          showComponent={showComponent}
          setShowComponent={setShowComponent}
        />
        <ShippingMethod
          showComponent={showComponent}
          setShowComponent={setShowComponent}
        />
        <Payment
          showComponent={showComponent}
          setShowComponent={setShowComponent}
        />
      </div>
      <CheckoutOrderSummary />
    </div>
  );
};

export default Checkout;
