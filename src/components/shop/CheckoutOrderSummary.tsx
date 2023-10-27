import { useAddtoCartContext } from "../../context/AddToCartContext";

const CheckoutOrderSummary = () => {
  const { cartCount, quantity, shippingCost, taxFee } = useAddtoCartContext();
  console.log("The cart items are ");

  return (
    <div className="w-full flex flex-row justify-center items-start mb-5 md:mt-5">
      <div className="w-[80%] border-2 rounded-lg md:my-2">
        <div className="px-2 py-5 text-[#575656;]">Summary for Order</div>
        <div className="flex flex-row justify-between items-center px-2 py-1">
          <div className="text-[16px] text-[#3f3d3d;]">({cartCount}) Items</div>
          <div className="text-[13px] text-[#3f3d3d;]">{quantity}</div>
        </div>
        <div className="flex flex-row justify-between items-center px-2 py-1">
          <div className="text-[16px] text-[#3f3d3d;]">Shipping</div>
          <div className="text-[13px] text-[#3f3d3d;]">
            {shippingCost === 0 ? "Free" : shippingCost}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-2 py-1">
          <div className="text-[16px] text-[#3f3d3d;]">Estimated tax fee:</div>
          <div className="text-[13px] text-[#3f3d3d;]">
            {taxFee === 0 ? "Free" : taxFee}
          </div>
        </div>
        <div className="border-b py-2" />
        <div className="flex flex-row justify-between items-center px-2 py-2">
          <div className="text-[19px] sm:text-[22px] text-[#406d6d;]">
            Order total:{" "}
          </div>
          <div className="text-[15px] text-[#3f3d3d;]">{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrderSummary;
