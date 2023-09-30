import { AddressTypes } from "../checkout/Address";

type InputType = {
  label: string;
  type: string;
  name: string;
  value: string;
  optional: boolean;
  msg?: string;
  error: AddressTypes;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type ErrorTypes = AddressTypes;

const Input = ({
  label,
  type,
  name,
  value,
  optional,
  msg,
  error,
  handleChange,
}: InputType) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 mb-2">
      <label>
        {label}
        {optional ? "(Optional)" : ""}
      </label>
      <input
        onChange={handleChange}
        className="w-[80%] py-1 px-2 border rounded-md outline-none"
        type={type}
        name={name}
        value={value}
        id=""
      />
      {msg ? <div className="text-[12px] text-[#524f25;]">{msg}</div> : ""}
      {error[name as keyof ErrorTypes] && (
        <div className="text-[12px] text-[#e42d2d;]">
          {error[name as keyof ErrorTypes]}
        </div>
      )}
    </div>
  );
};

export default Input;
