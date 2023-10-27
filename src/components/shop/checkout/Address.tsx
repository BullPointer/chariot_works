/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";
import Input from "../utils/Input";
import { useEffect, useState } from "react";
import Joi from "joi";
import {
  createShippingAddressOrders,
  getOrderById,
} from "../../../handleApi/orderApi";
import { getRequestedCookie } from "../../../handleApi/handleCookie";

type AddressProptypes = {
  showComponent: string;
  setShowComponent: React.Dispatch<React.SetStateAction<string>>;
};

export type AddressTypes = {
  fullname: string;
  address: string;
  email: string;
  companyName: string;
  phoneNum: string;
  zipCode: string;
  city: string;
  country: string;
};

const Address = ({ showComponent, setShowComponent }: AddressProptypes) => {
  const orderID = getRequestedCookie("orderID");

  const [shippingAddressInfo, setShippingAddressInfo] = useState({
    fullname: "",
    address: "",
    email: "",
    companyName: "",
    phoneNum: "",
    zipCode: "",
    city: "",
    country: "",
  } as AddressTypes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({} as AddressTypes);

  useEffect(() => {
    if (orderID) {
      const getOrders = async () => {
        try {
          const { data } = await getOrderById();
          console.log(data);

          if (data.order.status === "PENDING") {
            const addrData = data.order.receiver;
            setShippingAddressInfo({
              ...shippingAddressInfo,
              fullname: addrData.username ? addrData.username : "",
              address: addrData.homeAddr ? addrData.homeAddr : "",
              email: addrData.email ? addrData.email : "",
              companyName: addrData.companyName ? addrData.companyName : "",
              phoneNum: addrData.phoneNo ? addrData.phoneNo : "",
              zipCode: addrData.postCode ? addrData.postCode : "",
              city: addrData.city ? addrData.city : "",
              country: addrData.country ? addrData.country : "",
            });
          }
        } catch (error) {
          console.log("Error is ", error);
        }
      };
      getOrders();
    }
  }, []);

  const schema = Joi.object({
    fullname: Joi.string().min(5),
    address: Joi.string().min(5),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    companyName: Joi.string().allow("").min(3),
    phoneNum: Joi.string().regex(/^[0-9]+(-[0-9]+)*(\+\/[0-9]+)?$/),
    zipCode: Joi.number().min(2),
    city: Joi.string().min(2),
    country: Joi.string().min(2),
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setShippingAddressInfo({ ...shippingAddressInfo, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const errors = {} as AddressTypes;
    const { error } = schema.validate(shippingAddressInfo, {
      abortEarly: false,
    });
    if (error) {
      for (let index = 0; index < error.details.length; index++) {
        errors[error.details[index].path[0] as keyof AddressTypes] =
          error.details[index].message;
      }
      setIsLoading(false);
      return setError(errors);
    } else {
      try {
        const response: any = await createShippingAddressOrders(
          shippingAddressInfo
        );

        if (response.status === 201) {
          setShowComponent("shippingMethod");
          window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
          setError({} as AddressTypes);
          setIsLoading(false);
        }
      } catch (error: any) {
        console.log("New Error is ", error.response);
        setIsLoading(false);
        console.log(isLoading);
      }
    }
  };

  return (
    <div className="w-full border-2 rounded-lg my-2">
      <div className="flex flex-row justify-between items-center px-2 py-3 text-[#406d6d;]">
        <div className="text-[18px] md:text-[24px]">Shipping Address</div>
        {orderID && (
          <div
            className="flex flex-row justify-start items-center gap-1 cursor-pointer"
            onClick={() => setShowComponent("address")}
          >
            <Icon className="text-[17px]" icon="fluent:edit-12-regular" />
            <div className="text-[12px] md:text-[15px]">Edit</div>
          </div>
        )}
      </div>
      {showComponent === "address" && (
        <div>
          <div className="px-2 text-[14px] text-[#3f3d3d;]">
            This address will be used both as your personal address (for
            invoice) and as your delivery address.
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-2 py-5 text-[14px] text-[#292727]"
          >
            <Input
              handleChange={handleChange}
              label={"Full name (First and Last name)"}
              name={"fullname"}
              value={shippingAddressInfo.fullname}
              type={"text"}
              optional={false}
              error={error}
            />
            <Input
              handleChange={handleChange}
              label={"Address"}
              name={"address"}
              value={shippingAddressInfo.address}
              type={"text"}
              optional={false}
              error={error}
            />
            <Input
              handleChange={handleChange}
              label={"Email"}
              name={"email"}
              value={shippingAddressInfo.email}
              type={"email"}
              optional={false}
              error={error}
            />
            <Input
              handleChange={handleChange}
              label={"Company name"}
              name={"companyName"}
              value={shippingAddressInfo.companyName}
              type={"text"}
              optional={true}
              error={error}
            />
            <Input
              handleChange={handleChange}
              label={"Phone number"}
              name={"phoneNum"}
              value={shippingAddressInfo.phoneNum}
              type={"text"}
              optional={false}
              error={error}
              msg={"May be used to support delivery"}
            />
            <Input
              handleChange={handleChange}
              label={"Zip/Postal Code"}
              name={"zipCode"}
              value={shippingAddressInfo.zipCode}
              type={"text"}
              optional={false}
              error={error}
            />
            <Input
              handleChange={handleChange}
              label={"City"}
              name={"city"}
              value={shippingAddressInfo.city}
              type={"text"}
              optional={false}
              error={error}
            />
            <Input
              handleChange={handleChange}
              label={"Country"}
              name={"country"}
              value={shippingAddressInfo.country}
              type={"text"}
              optional={false}
              error={error}
            />
            <button className="py-1 px-3 my-3 rounded-full text-[13px] sm:text-[15px] text-[#fff;] bg-[#161531;]">
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Address;
