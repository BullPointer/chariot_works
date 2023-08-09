import { ContactType } from "../ContactForm";

type InputProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  contact: ContactType;
  error: ContactType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  name,
  type,
  placeholder,
  contact,
  error,
  handleChange,
}: InputProps) => {
  return (
    <div className="w-[50%] flex flex-col p-2 border-2">
      {" "}
      <label
        className="text-[#474747] text-lg w-[50%] p-1 font-bold"
        htmlFor=""
      >
        {label} <i className="text-sm text-red-400">(Required)</i>
      </label>
      <input
        onChange={handleChange}
        placeholder={placeholder}
        className="outline-none border-2 rounded bg-transparent p-1"
        type={type}
        value={contact[name as keyof ContactType]}
        name={name}
      />
      {error[name as keyof ContactType] && (
        <div className="text-red-400 font-bold text-xs">
          {" "}
          {error[name as keyof ContactType]}
        </div>
      )}
    </div>
  );
};

export default Input;
