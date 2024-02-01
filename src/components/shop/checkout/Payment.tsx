/* eslint-disable react-hooks/rules-of-hooks */
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Icon } from "@iconify/react";
import RadioInput from "../utils/RadioInput";
import { useEffect, useState } from "react";
import Img from "../../../../Images/flutterwave-img.png";
import {
  completeShippingOrders,
  getOrderById,
} from "../../../handleApi/orderApi";
import { useAddtoCartContext } from "../../../context/AddToCartContext";

type AddressProptypes = {
  showComponent: string;
  setShowComponent: React.Dispatch<React.SetStateAction<string>>;
  setCompletedPurchase: React.Dispatch<React.SetStateAction<boolean>>;
};

const Payment = ({
  showComponent,
  setShowComponent,
  setCompletedPurchase,
}: AddressProptypes) => {
  const [paymentType, setPaymentType] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [customer, setCustomer] = useState({
    email: "",
    username: "",
    _id: "",
  });

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await getOrderById();
        console.log(data);

        setPaymentType(data.order.paymentType);
        setPaymentMethod(data.order.paymentType);
      } catch (error) {
        console.log("Error is ", error);
      }
    };
    getOrders();
  }, []);

  useEffect(() => {
    const getOrderData = async () => {
      try {
        const { data } = await getOrderById();
        setCustomer(data.order.customer);
      } catch (error) {
        console.log("New Error ", error);
      }
    };
    getOrderData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPaymentMethod(value);
  };
  const { quantity, currency } = useAddtoCartContext();
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUB_KEY,
    tx_ref: Date.now().toString(),
    amount: Number(quantity),
    currency: currency.toString().toUpperCase(),
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: customer?.email,
      phone_number: "09061569485",
      name: customer?.username,
    },
    customizations: {
      title: "CHARIOT INTERIOR",
      description: "Complete Payment",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Payment method is ", paymentMethod);

    if (paymentMethod === "" || paymentMethod === undefined) {
      setErr("Select one payment method to continue");
    } else {
      setErr(null);
      if (paymentMethod === "onSite") {
        try {
          handleFlutterPayment({
            callback: async (response) => {
              console.log(response);
              await completeShippingOrders(paymentMethod, "payment-method");
              closePaymentModal(); // this will close the modal programmatically
              setCompletedPurchase(true);
            },
            onClose: () => {
              console.log("Listen, I'm closed for today!");
              setCompletedPurchase(true);
            },
          });
        } catch (error) {
          console.log("Error hum... ", error);
        }
      } else if (paymentMethod === "onDelivery") {
        try {
          await completeShippingOrders(paymentMethod, "payment-method");
          setCompletedPurchase(true);
        } catch (error) {
          console.log("Error is ", error);
        }
      }
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
              <div>
                <RadioInput
                  handleChange={handleChange}
                  label={"Chariot Interiors Pick-up Center"}
                  name={"payment"}
                  value="onSite"
                  type={paymentMethod}
                  msg={
                    "Order will be available 24 hours after order approval (payment confirmation)"
                  }
                />
                <img src={Img} alt="" />
              </div>
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
            {err && <div className="text-[12px] text-[#a83f3f;]">{err}</div>}
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
