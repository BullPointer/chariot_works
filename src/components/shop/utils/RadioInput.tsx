type RadioInputProps = {
  label: string;
  msg: string;
  name: string;
};

const RadioInput = ({ label, msg, name }: RadioInputProps) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center gap-1">
        <input type="radio" name={name} id="" />
        <label className="text-[18px]">{label}</label>
      </div>
      <div className="text-[14px]">{msg}</div>
      <div className="text-[14px]">
        <span className="font-semibold">Delivery fee: </span>Free
      </div>
    </>
  );
};

export default RadioInput;
