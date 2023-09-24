import { Icon } from "@iconify/react";
import Input from "../utils/Input";

type AddressProptypes = {
  showComponent: string;
  setShowComponent: React.Dispatch<React.SetStateAction<string>>;
};

const Address = ({ showComponent, setShowComponent }: AddressProptypes) => {
  const handleSubmit = () => {
    setShowComponent("shippingMethod");
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  };

  return (
    <div className=" w-full border-2 rounded-lg my-2">
      <div className="flex flex-row justify-between items-center px-2 py-3 text-[24px] text-[#406d6d;]">
        <div>Shipping Address</div>
        <div
          className="flex flex-row justify-start items-center gap-1 cursor-pointer"
          onClick={() => setShowComponent("address")}
        >
          <Icon className="text-[17px]" icon="fluent:edit-12-regular" />
          <div className="text-[15px]">Edit</div>
        </div>
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
              label={"Full name (First and Last name)"}
              name={"fullname"}
              value={""}
              type={"text"}
              optional={false}
            />
            <Input
              label={"Address"}
              name={"address"}
              value={""}
              type={"text"}
              optional={false}
            />
            <Input
              label={"Email"}
              name={"email"}
              value={""}
              type={"email"}
              optional={false}
            />
            <Input
              label={"Company name"}
              name={"address"}
              value={""}
              type={"text"}
              optional={true}
            />
            <Input
              label={"Phone number"}
              name={"phoneNum"}
              value={""}
              type={"text"}
              optional={false}
              msg={"May be used to support delivery"}
            />
            <Input
              label={"Zip/Postal Code"}
              name={"zipCode"}
              value={""}
              type={"text"}
              optional={false}
            />
            <Input
              label={"City"}
              name={"city"}
              value={""}
              type={"text"}
              optional={false}
            />
            <Input
              label={"Country"}
              name={"country"}
              value={""}
              type={"text"}
              optional={false}
            />
            <button className="py-1 px-3 my-3 rounded-full text-[15px] text-[#fff;] bg-[#161531;]">
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Address;
