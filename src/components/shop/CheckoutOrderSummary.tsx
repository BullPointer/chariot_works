const CheckoutOrderSummary = () => {
  return (
    <div className="w-full flex flex-row justify-center items-start mt-5">
      <div className="w-[80%] border-2 rounded-lg my-2">
        <div className="px-2 py-5 text-[#575656;]">Summary for Order</div>
        <div className="flex flex-row justify-between items-center px-2 py-1">
          <div className="text-[16px] text-[#3f3d3d;]">(2) Items</div>
          <div className="text-[13px] text-[#3f3d3d;]">2,500</div>
        </div>
        <div className="flex flex-row justify-between items-center px-2 py-1">
          <div className="text-[16px] text-[#3f3d3d;]">Shipping</div>
          <div className="text-[13px] text-[#3f3d3d;]">Free</div>
        </div>
        <div className="flex flex-row justify-between items-center px-2 py-1">
          <div className="text-[16px] text-[#3f3d3d;]">Estimated tax fee:</div>
          <div className="text-[13px] text-[#3f3d3d;]">Free</div>
        </div>
        <div className="border-b py-2" />
        <div className="flex flex-row justify-between items-center px-2 py-2">
          <div className="text-[22px] text-[#406d6d;]">Order total: </div>
          <div className="text-[15px] text-[#3f3d3d;]">24,000</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrderSummary;
