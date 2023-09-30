type RadioInputProps = {
  label: string;
  msg: string;
  name: string;
  value: string;
  type: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput = ({
  label,
  msg,
  name,
  value,
  type,
  handleChange,
}: RadioInputProps) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center gap-1">
        <input
          // className="ring ring-black text-black"
          onChange={handleChange}
          type="radio"
          name={name}
          value={value}
          checked={type === value}
          id=""
        />
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
