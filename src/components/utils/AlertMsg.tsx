type AlertMsgType = {
  message: string;
  handleAlertMsg: (e: React.MouseEvent) => void;
};

const AlertMsg = ({ message, handleAlertMsg }: AlertMsgType) => {
  const commonStyling = `flex justify-center items-center`;
  return (
    <div
      className={`z-10 fixed left-0 top-0 ${commonStyling} flex-row backdrop-blur-sm w-[100%] h-[100%] bg-transparent`}
    >
      <div
        className={`w-[90%] md:w-[50%] ${commonStyling} flex-col gap-2 rounded-xl py-10 px-10 bg-[#1d1e31;] text-[#fff;]`}
      >
        <div className="text-center text-[20px] sm:text-[23px]">{message}</div>
        <div
          onClick={handleAlertMsg}
          className="w-full rounded-sm cursor-pointer py-2 px-3 text-center font-bold bg-[#fff;] text-[#020202;]"
        >
          OK
        </div>
      </div>
    </div>
  );
};

export default AlertMsg;
