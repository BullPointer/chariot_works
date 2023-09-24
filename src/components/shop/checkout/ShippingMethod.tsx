import { Icon } from "@iconify/react";
import RadioInput from "../utils/RadioInput";

type AddressProptypes = {
  showComponent: string;
  setShowComponent: React.Dispatch<React.SetStateAction<string>>;
};

const ShippingMethod = ({
  showComponent,
  setShowComponent,
}: AddressProptypes) => {
  const handleSubmit = () => {
    setShowComponent("payment");
  };

  return (
    <div className=" w-full border-2 rounded-lg my-2">
      <div className="flex flex-row justify-between items-center px-2 py-3 text-[24px] text-[#406d6d;]">
        <div>Shipping Method</div>
        <div
          className="flex flex-row justify-start items-center gap-1 cursor-pointer"
          onClick={() => {
            setShowComponent("shippingMethod");
            window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
          }}
        >
          <Icon className="text-[17px]" icon="fluent:edit-12-regular" />
          <div className="text-[15px]">Edit</div>
        </div>
      </div>
      {showComponent === "shippingMethod" && (
        <div>
          <div className="px-2 text-[14px] text-[#3f3d3d;]">
            Select your preferred method of delivery
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-2 py-5 text-[14px] text-[#292727]"
          >
            <div className="flex flex-col justify-start items-start gap-2 mb-2">
              <RadioInput
                label={"Chariot Interiors Pick-up Center"}
                name={"delivery-type"}
                msg={
                  "Pick up in-store 24 hours after order approval (payment confirmation)"
                }
              />
              <RadioInput
                label={"Have it delivered to me"}
                name={"delivery-type"}
                msg={
                  "A confirmation email will be sent to you immediately after placing order"
                }
              />
            </div>
            <button className="py-1 px-3 my-3 rounded-full text-[15px] text-[#fff;] bg-[#161531;]">
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShippingMethod;
