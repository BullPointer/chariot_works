type ErrorTypes = { fullname?: string; email: string; password: string };

type InputPropTypes = {
  label: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: ErrorTypes;
};

const Input = ({ label, name, type, handleChange, error }: InputPropTypes) => {
  return (
    <div className="w-[90%] md:w-[80%] m-auto flex flex-col justify-center items-start gap-2">
      <label className="text-[16px] text-black font-semibold" htmlFor="">
        {label}
      </label>
      <input
        onChange={handleChange}
        className="w-full p-1 sm:p-2 outline-none rounded-md border opacity-90"
        type={type}
        name={name}
        id=""
      />
      {error && error[name as keyof ErrorTypes] && (
        <p className="text-[12px] text-red-500">
          {error[name as keyof ErrorTypes]}
        </p>
      )}
    </div>
  );
};

export default Input;
