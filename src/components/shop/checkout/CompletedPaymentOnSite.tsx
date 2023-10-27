import { useNavigate } from "react-router-dom";

export const CompletedPaymentOnSite = () => {
  const handleCompletePurchase = async () => {
    try {
      navigate("/shop");
      window.location.reload();
    } catch (error) {
      console.log("Error Message ", error);
    }
  };
  const navigate = useNavigate();
  return (
    <div
      className="z-30 w-full h-screen fixed top-0 left-0 flex flex-row 
    justify-center items-center"
    >
      <div className="w-full h-screen absolute top-0 left-0 opacity-90 bg-[#000;]"></div>
      <div className="z-10 w-[80%] md:w-[50%] bg-[#fff;]">
        <div className="p-3">
          <div className="text-[23px] py-2 font-bold">
            Thank You, for your order!
          </div>
          <div className="text-[18px] py-1">
            The receiver will receive a call from us in less than 24 hours, for
            further details/confirmation as required.
          </div>
        </div>
        <div
          className="cursor-pointer py-2 px-4 text-center font-bold text-[#fff;] bg-[#575777;]"
          onClick={handleCompletePurchase}
        >
          Close
        </div>
      </div>
    </div>
  );
};
