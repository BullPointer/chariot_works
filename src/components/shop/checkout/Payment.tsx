import { Icon } from "@iconify/react";
import RadioInput from "../utils/RadioInput";
import { useEffect, useState } from "react";
import { getOrderById } from "../../../handleApi/orderApi";

type AddressProptypes = {
  showComponent: string;
  setShowComponent: React.Dispatch<React.SetStateAction<string>>;
};

const Payment = ({ showComponent, setShowComponent }: AddressProptypes) => {
  const [paymentType, setPaymentType] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await getOrderById();
        setPaymentType(data.order.paymentType);
        setPaymentMethod(data.order.paymentType);
      } catch (error) {
        console.log("Error is ", error);
      }
    };
    getOrders();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("The value is ", value);

    setPaymentMethod(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //  await completeShippingOrders(paymentMethod, "payment-method");
      console.log(paymentMethod);
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  return (
    <div className=" w-full border-2 rounded-lg my-2">
      <div className="flex flex-row justify-between items-center px-2 py-3 text-[#406d6d;]">
        <div className="text-[18px] md:text-[24px]">Payment Method</div>
        {paymentType && (
          <div
            className="flex flex-row justify-start items-center gap-1 cursor-pointer"
            onClick={() => {
              setShowComponent("payment");
              window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
            }}
          >
            <Icon className="text-[17px]" icon="fluent:edit-12-regular" />
            <div className="text-[12px] md:text-[15px]">Edit</div>
          </div>
        )}
      </div>
      {showComponent === "payment" && (
        <div>
          <div className="px-2 text-[14px] text-[#3f3d3d;]">
            Select payment method
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-2 py-5 text-[14px] text-[#292727]"
          >
            <div className="flex flex-col justify-start items-start gap-2 mb-2">
              <RadioInput
                handleChange={handleChange}
                label={"Chariot Interiors Pick-up Center"}
                name={"payment"}
                value="onSite"
                type={paymentMethod}
                msg={
                  "Pick up in-store 24 hours after order approval (payment confirmation)"
                }
              />
              <RadioInput
                handleChange={handleChange}
                label={"Pay on delivery"}
                name={"payment"}
                value="onDelivery"
                type={paymentMethod}
                msg={
                  "Make payment when product has been delivered to your door step"
                }
              />
            </div>
            <button className="py-1 px-3 my-3 rounded-full text-[13px] sm:text-[15px] text-[#fff;] bg-[#161531;]">
              Place order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Payment;
