type InputType = {
  label: string;
  type: string;
  name: string;
  value: string;
  optional: boolean;
  msg?: string;
};

const Input = ({ label, type, name, value, optional, msg }: InputType) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 mb-2">
      <label>
        {label}
        {optional ? "(Optional)" : ""}
      </label>
      <input
        className="w-[80%] py-1 px-2 border rounded-md outline-none"
        type={type}
        name={name}
        value={value}
        id=""
      />
      {msg ? <div className="text-[12px] text-[#524f25;]">{msg}</div> : ""}
    </div>
  );
};

export default Input;
